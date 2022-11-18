const Upload = require("../models/imageUploadModel");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "boye",
  },
});

exports.upload = multer({
  storage: storage,
});

exports.uploadImage = async (req, res) => {
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
      message: err.message,
    });
  }
};
