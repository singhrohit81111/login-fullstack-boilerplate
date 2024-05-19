const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("suceesfully connected to DB");
  } catch (error) {
    console.log("Eroor occurred while connecting to DB");
  }
};

module.exports = connectDB;
