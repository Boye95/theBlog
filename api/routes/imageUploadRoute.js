const express = require("express");

const { uploadImage, upload } = require("../controllers/imageUploadController");

const router = express.Router();


router.post("/", upload.single("image"), uploadImage);

module.exports = router;
