const express = require("express");

const {
  createTags,
  getTags,
  updateTags,
} = require("../controllers/tagsController");

const router = express.Router();

// Create a new tag
router.post("/", createTags);
router.get("/", getTags);
router.patch("/:id", updateTags);

module.exports = router;
