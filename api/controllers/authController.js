const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const axios = require("axios");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

// Register a  new user
exports.registerUser = async (req, res) => {
  // Register for a user with google sign in
  if (req.body.googleToken) {
    const { googleToken } = req.body;

    const getUserDetails = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${googleToken}`,
        },
      }
    );

    const { email, picture, name } = getUserDetails.data;

    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        const token = jwt.sign({ id: existingUser._id }, process.env.SECRET, {
          expiresIn: "30d",
        });

        const registeredUser = {
          _id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
          avatar: existingUser.avatar,
        };

        if (existingUser.about) {
          registeredUser.about = existingUser.about;
        }

        return res.status(200).json({
          status: "success",
          data: {
            registeredUser,
            token,
          },
        });
      }

      // save picture to cloudinary
      const result = await cloudinary.uploader.upload(picture, {
        folder: "avatars",
      })

      const userFields = {
        name,
        email,
        avatar: {
          url: result.secure_url,
          public_id: result.public_id,
        },
      };
      // console.log(userFields);

      // Create a new user
      const registeredUser = await User.create(userFields);

      // Create a token
      const token = jwt.sign({ id: registeredUser._id }, process.env.SECRET, {
        expiresIn: "30d",
      });

      res.status(200).json({
        status: "success",
        data: {
          registeredUser,
          token,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error,
      });
    }
  } else {
    const { name, email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: { msg: "User already exists" } });
      }

      // Check if email is valid
      if (!validator.isEmail(email)) {
        return res.status(400).json({ errors: { msg: "Invalid email" } });
      }
      // Check if password is valid
      if (!validator.isStrongPassword(password)) {
        return res
          .status(400)
          .json({ errors: { msg: "Password not strong enough" } });
      }
      // check if fields are empty
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ errors: { msg: "Please fill all fields" } });
      }

      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      let registeredUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      // Create a token
      const token = jwt.sign({ id: registeredUser._id }, process.env.SECRET, {
        expiresIn: "30d",
      });
      res.status(200).json({
        status: "success",
        data: {
          registeredUser: {
            _id: registeredUser._id,
            name: registeredUser.name,
            email: registeredUser.email,
          },
          token,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error,
      });
    }
  }
};

// Login a user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    let existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ errors: { msg: "Invalid credentials" } });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ errors: { msg: "Invalid credentials" } });
    }

    // Create a token
    const token = jwt.sign({ id: existingUser._id }, process.env.SECRET, {
      expiresIn: "30d",
    });

    const registeredUser = {
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    };

    if (existingUser.avatar) {
      registeredUser.avatar = existingUser.avatar;
    }
    if (existingUser.about) {
      registeredUser.about = existingUser.about;
    }

    res.status(200).json({
      status: "success",
      data: {
        registeredUser,
        token,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
