const express = require("express");
const Upload = require("../models/imageUploadModel");

const { uploadImage } = require("../controllers/imageUploadController");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const router = express.Router();

cloudinary.config({
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "boye",
  },
});
const upload = multer({
  storage: storage,
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const upload = await Upload.create({
      image: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });
    res.status(201).json({
      status: "success",
      data: upload,
    });
  } catch (err) {
    res.status(400).json({
        status: "fail",
        message: err.message
    })
}
});

module.exports = router;
