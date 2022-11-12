require("dotenv").config();
const express = require("express");

// Create express instance
const app = express();
const blogPostsRoute = require("./routes/blogPostsRoute");

// API routes
app.use("/api", blogPostsRoute);

// listen on PORT
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
