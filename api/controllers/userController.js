const User = require("../models/userModel");
const BlogPost = require("../models/blogPostsModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

// get all users by admin
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
}


// update a user
exports.updateUser = async (req, res) => {
  const { name, email, oldPassword, password, avatar, about } = req.body;
  if (req.userId === req.params.id) {
    try {
      if (oldPassword && password) {
        // check if user submitted the correct 'oldPassword'
        const currentPass = await User.findById(req.params.id);
        const isMatch = await bcrypt.compare(oldPassword, currentPass.password);
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: { msg: "Old password not correct" } });
        }
      }
      if (password) {
        if (!oldPassword) {
          return res
            .status(400)
            .json({ errors: { msg: "Please submit your old password" } });
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        var hashedPassword = await bcrypt.hash(password, salt);
      }

      // delete old avatar from cloudinary
      // get avatar public_id from db
      let result;
      // delete avatar from cloudinary
      const avatarId = await User.findById(req.params.id).select(
        "avatar.public_id"
      );
      const avatarPID = avatarId.avatar.public_id;
      if (avatarPID) {
        await cloudinary.uploader.destroy(avatarPID);
      }
      // save avatar to cloudinary
      if (avatar) {
        result = await cloudinary.uploader.upload(avatar, {
          folder: "avatars",
        });
      }
      // validate user update information
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: { msg: "Email already exists" } });
      }

      // Check if email is valid
      if (email) {
        if (!validator.isEmail(email)) {
          return res.status(400).json({ errors: { msg: "Invalid email" } });
        }
      }
      // Check if password is valid
      if (password) {
        if (!validator.isStrongPassword(password)) {
          return res
            .status(400)
            .json({ errors: { msg: "Password not strong enough" } });
        }
      }
      const userFields = {
        name,
        email,
        password: hashedPassword,
        about,
      };
      if (avatar) {
        userFields.avatar = {
          url: result.secure_url,
          public_id: result.public_id,
        };
      }

      const existingUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: userFields },
        {
          new: true,
        }
      );

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
        registeredUser.about = about;
      }

      res.status(200).json({
        status: "success",
        data: {
          registeredUser,
          token,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error,
      });
    }
  } else {
    res.status(400).json({
      status: "fail",
      message: "You are not authorized to update this user",
    });
  }
};

// delete a user
exports.deleteUser = async (req, res) => {
  if (req.userId === req.params.id) {
    try {
      // delete avatar from cloudinary
      const avatarId = await User.findById(req.params.id).select(
        "avatar.public_id"
      );
      const avatarPID = avatarId?.avatar?.public_id;
      if (avatarPID) {
        await cloudinary.uploader.destroy(avatarPID);
      }

      // delete all blogposts from user
      const blogPosts = await BlogPost.deleteMany({ authorInfo: req.params.id });

      // delete user from db
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: "success",
        data: null,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error,
      });
    }
  } else {
    res.status(400).json({
      status: "fail",
      message: "You are not authorized to delete this user",
    });
  }
};

