const User = require("../models/userModel");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

// Register a  new user
exports.registerUser = async (req, res) => {
  const { name, email, password, avatar } = req.body;
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    // Create a new user
    let newUser = await User.create({
      name,
      email,
      password,
      avatar
    });
    res.status(200).json({
        status: "success",
        data: {
            newUser,
        },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
