const express = require("express");


const {
  getAllBlogPosts,
  getSingleBlogPost,
  createBlogPost,
  deleteBlogPost,
  updateBlogPost,
} = require("../controllers/blogPostsController");

const router = express.Router();
const authWare = require("../middleware/authWare");

// Get all blog posts
router.get("/", getAllBlogPosts);

// Get single blog post
router.get("/:id", getSingleBlogPost);

// Create a new blog post
router.post("/", authWare, createBlogPost);

// Delete a blog post
router.delete("/:id", authWare, deleteBlogPost);

// Update a blog post
router.patch("/:id", authWare, updateBlogPost);

module.exports = router;
