const express = require("express");
const BlogPost = require("../models/blogPostsModel");

const router = express.Router();

// Get all blog posts
router.get("/", (req, res) => {
  res.json({ message: "This is all the blog posts" });
});

// Get single blog post
router.get("/:id", (req, res) => {
  res.json({ message: "this is a single blog post" });
});

// Create a new blog post
router.post("/", (req, res) => {
  const { title, subtitle, body, displayImage, tags } = req.body;

  try {
    const post = BlogPost.create({ title, subtitle, body, displayImage, tags });
  } catch (error) {
    console.log(error);
  }
  res.json({ message: "This is a new blog post" });
});

// Update a blog post
router.patch("/:id", (req, res) => {
  res.json({ message: "This is a blog post update" });
});

module.exports = router;
