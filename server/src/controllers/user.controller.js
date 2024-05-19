const asyncHandler = require("../utils/asyncHandler");
const User=require('../models/user.model');

const register = asyncHandler(async (req, res) => {
    const {firstName,lastName,email,password,refresToken}=req.body;
    const user=await User.findOne({email});
    if(user){
        throw new ApiError
    }
});

const login = asyncHandler(async (req, res) => {});

const getCurrentUser = asyncHandler(async (req, res) => {});

const updatePassword = asyncHandler(async (req, res) => {});

const refreshAccessToken = asyncHandler(async (req, res) => {});

module.exports = {
  register,
  login,
  getCurrentUser,
  updatePassword,
  refreshAccessToken,
};
