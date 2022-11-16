require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const multer = require("multer");

// Create express instance
const app = express();
const mongoose = require("mongoose");
const blogPostsRoute = require("./routes/blogPostsRoute");
const imageUploadRoute = require("./routes/imageUploadRoute");


app.use(express.json());
app.use(cors());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: storage,
// });

// app.post("/api/upload", upload.single("image"), (req, res) => {
//   res.status(200).json("File uploaded");
// });

// API routes
app.use("/api/blogposts", blogPostsRoute);
app.use("/api/upload", imageUploadRoute);


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    // listen on PORT
    app.listen(process.env.PORT, () => {
      console.log(
        "Mongodb is connected && Server is running on port",
        process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
