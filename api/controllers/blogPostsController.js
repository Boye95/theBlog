const BlogPost = require("../models/blogPostsModel");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

// Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  tagName = req.query.tags;
  try {
    let posts;
    if (tagName) {
      posts = await BlogPost.find({
        tags: {
          $in: [tagName],
        },
      });
    } else {
      posts = await BlogPost.find().sort({ createdAt: -1 });
    }
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// Get single blog post
exports.getSingleBlogPost = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const post = await BlogPost.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  const { title, subtitle, body, displayImage, tags } = req.body;

  try {
    const result = await cloudinary.uploader.upload(displayImage, {
      folder: "boye",
    });
    const newPost = await BlogPost.create({
      title,
      subtitle,
      body,
      displayImage: {
        url: result.secure_url,
        public_id: result.public_id,
      },
      tags,
    });
    res.status(201).json({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: `Can't delete non-existent post` });
  }

  try {
    const getBlog = await BlogPost.findById(req.params.id);
    await cloudinary.uploader.destroy(getBlog.displayImage.public_id);
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// Update a blog post
exports.updateBlogPost = async (req, res) => {
  const { title, subtitle, body, displayImage, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: `Can't update non-existent post` });
  }

  try {
    const getBlog = await BlogPost.findById(req.params.id);
    if (displayImage !== getBlog.displayImage.url) {
      await cloudinary.uploader.destroy(getBlog.displayImage.public_id);
    }
    const result = await cloudinary.uploader.upload(displayImage, {
      folder: "boye",
    });
    const updatedPost = {
      title,
      subtitle,
      body,
      displayImage: {
        url: result.secure_url,
        public_id: result.public_id,
      },
      tags,
    };
    const post = await BlogPost.findByIdAndUpdate(req.params.id, updatedPost, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
