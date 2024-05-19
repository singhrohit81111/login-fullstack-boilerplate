const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    reuired: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return (
    await jwt.sign(
      {
        _id: this._id,
        email: this.email,
        password: this.password,
        refreshToken: this.refreshToken,
      },
      process.env.ACCESS_TOKEN
    ),
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
      firstName: this.firstName,
    },
    process.env.REFRESH_ACCESS_TOKEN,
    { expiresIn: process.env.REFRESH_ACCESS_TOKEN_EXPIRY }
  );
};

const User = mongoose.model("User", userSchema);

module.exports = User;
