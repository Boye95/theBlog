const express = require("express");

const { createTags } = require("../controllers/tagsController");

const router = express.Router();

// Create a new tag
router.post("/", createTags);

module.exports = router;