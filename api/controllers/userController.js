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
    if (req.body.userId !== req.params.id) {
        return res.json({ message: "You can update only your account!" });
    }
    try {
        // delete old avatar from cloudinary
        // get avatar public_id from db
        const avatarId = await User.findById(req.params.id).select("avatar.public_id"); 
        // delete avatar from cloudinary
        if (avatarId || avatarId === avatar.)
    }
}
