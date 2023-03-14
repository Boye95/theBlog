require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Create express instance
const app = express();
const mongoose = require("mongoose");
const blogPostsRoute = require("./routes/blogPostsRoute");
const tagsRoute = require("./routes/tagsRoute");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://theblogx.onrender.com",
      "https://theblogx.netlify.app",
      "http://127.0.0.1:5173/"
    ],
  })
);

// API routes
app.use("/api/blogposts", blogPostsRoute);
app.use("/api/tags", tagsRoute);
app.use("/api/users", authRoute);
app.use("/api/modifyuser", userRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    // listen on PORT
    app.listen(process.env.PORT, () => {
      console.log(
        "Mongodb is connected && Server is running on port",
        process.env.PORT || 4000
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
