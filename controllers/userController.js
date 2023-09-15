const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const userModel = require("../models/userModel");

//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await userModel.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  
  res.json({
    message: "Register the user",
  });
});

//@desc Login a user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({
    message: "User logged in",
  });
});

//@desc Current User Data
//@route GET /api/users/current
//@access public

const currentUser = asyncHandler(async (req, res) => {
  res.json({
    message: "current user information",
  });
});

module.exports = { registerUser, loginUser, currentUser };
