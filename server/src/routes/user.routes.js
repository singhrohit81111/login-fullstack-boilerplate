const express = require("express");
const {
  login,
  register,
  getCurrentUser,
  updatePassword,
} = require("../controllers/user.controller");
const router = express.Router();

router.route("/register").put(register);
router.route("/login").put(login);
router.route("/getcurrentuser").get(getCurrentUser);
router.route("/update-password").post(updatePassword);

module.exports = router;
