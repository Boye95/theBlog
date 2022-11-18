const express = require("express");


const {
  getAllBlogPosts,
  getSingleBlogPost,
  createBlogPost,
  deleteBlogPost,
  updateBlogPost,
  upload
} = require("../controllers/blogPostsController");

const router = express.Router();

// Get all blog posts
router.get("/", getAllBlogPosts);

// Get single blog post
router.get("/:id", getSingleBlogPost);

// Create a new blog post
router.post("/", upload.single("displayImage"), createBlogPost);

// Delete a blog post
router.delete("/:id", deleteBlogPost);

// Update a blog post
router.patch("/:id", updateBlogPost);

module.exports = router;
