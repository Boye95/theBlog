const Upload = require("../models/imageUploadModel");
const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// cloudinary.config({
//   secure: true,
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "boye",
//   },
// });



// exports.uploadImage = async (req, res) => {
//     try {
//         const result = await upload.single("image");
//         const upload = await Upload.create({
//         image: {
//             url: result.secure_url,
//             public_id: result.public_id,
//         },
//         });
//         res.status(201).json({
//         status: "success",
//         data: upload,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };
