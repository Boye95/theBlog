require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Create express instance
const app = express();
const mongoose = require("mongoose");
const blogPostsRoute = require("./routes/blogPostsRoute");
const tagsRoute = require("./routes/tagsRoute");
const userRoute = require("./routes/authRoute");

app.use(express.json({ limit: "50mb" }));
app.use(cors());

// API routes
app.use("/api/blogposts", blogPostsRoute);
app.use("/api/tags", tagsRoute);
app.use("/api/users", userRoute);

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
