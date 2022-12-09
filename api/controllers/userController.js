const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

// update a user
exports.updateUser = async (req, res) => {
  const { name, email, password, avatar, about } = req.body;
  if (req.userId === req.params.id) {
    console.log(req.userId);
    console.log(req.params.id);

    try {
      if (password) {
        // hash password
        const salt = await bcrypt.genSalt(10);
        var hashedPassword = await bcrypt.hash(password, salt);
      }
      // delete old avatar from cloudinary
      // get avatar public_id from db
      const avatarId = await User.findById(req.params.id).select(
        "avatar.public_id"
      );
      if (avatar) {
        // delete avatar from cloudinary
        if (avatarId || avatarId === "") {
          await cloudinary.uploader.destroy(avatarId);
        }
      }
      // save avatar to cloudinary
      const result = await cloudinary.uploader.upload(avatar, {
        folder: "avatars",
      });

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

      // update user
      const updatedUser = {
        name,
        email,
        password: hashedPassword,
        avatar: {
          url: result.secure_url,
          public_id: result.public_id,
        },
        about,
      };

      const userUpdated = await User.findByIdAndUpdate(
        req.params.id,
        updatedUser,
        {
          new: true,
        }
      );

      const token = jwt.sign({ id: userUpdated._id }, process.env.SECRET, {
        expiresIn: "30d",
      });

      res.status(200).json({
        status: "success",
        data: {
          userUpdated,
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
