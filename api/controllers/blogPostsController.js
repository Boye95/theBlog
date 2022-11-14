const BlogPost = require("../models/blogPostsModel");
const mongoose = require("mongoose");

// Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
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
  try {
    const newPost = await BlogPost.create(req.body);
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
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
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
