const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
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

    // Check if email is valid
    if (!validator.isEmail(email)) {
      return res.status(400).json({ errors: [{ msg: "Invalid email" }] });
    }
    // Check if password is valid
    if (!validator.isStrongPassword(password)) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Password not strong enough" }] });
    }
    // check if fields are empty
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Please fill all fields" }] });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    let newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      avatar,
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
