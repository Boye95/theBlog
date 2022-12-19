const express = require("express");
const session = require("express-session")

const {
  getAllBlogPosts,
  getSingleBlogPost,
  getPostByAuthor,
  createBlogPost,
  deleteBlogPost,
  updateBlogPost,
} = require("../controllers/blogPostsController");



const router = express.Router();
const { authWare, adminWare } = require("../middleware/authWare");

// Get all blog posts
router.get("/", getAllBlogPosts);

// Get single blog post
router.get("/:id", getSingleBlogPost);

// get post by a particular author
router.get("/author/:id", getPostByAuthor);

// Create a new blog post
router.post("/", authWare, createBlogPost);

// Delete a blog post
router.delete("/:id", authWare, deleteBlogPost);

// Update a blog post
router.patch("/:id", authWare, updateBlogPost);

module.exports = router;
