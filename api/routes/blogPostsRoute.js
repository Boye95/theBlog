const express = require("express");
const multer = require("multer");

const {
  getAllBlogPosts,
  getSingleBlogPost,
  createBlogPost,
  deleteBlogPost,
  updateBlogPost,
} = require("../controllers/blogPostsController");

const router = express.Router();


// router.post("/api/upload", upload.single("image"), (req, res) => {
//   cloudinary.uploader.upload(req.file.path, (err, result) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     res.json(result);
//   })
//   res.status(200).json("File uploaded");
// });

// Get all blog posts
router.get("/", getAllBlogPosts);

// Get single blog post
router.get("/:id", getSingleBlogPost);

// Create a new blog post
router.post("/", createBlogPost);

// Delete a blog post
router.delete("/:id", deleteBlogPost);

// Update a blog post
router.patch("/:id", updateBlogPost);

module.exports = router;
