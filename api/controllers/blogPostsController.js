const BlogPost = require("../models/blogPostsModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");
const { calculate } = require("calculate-readtime");
const validator = require("validator");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

// Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  tagName = req.query.tags;

  try {
    let posts;
    if (tagName) {
      posts = await BlogPost.find({
        tags: {
          $in: [tagName],
        },
      });
    } else {
      posts = await BlogPost.find().sort({ createdAt: -1 });
    }
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// Get single blog post
exports.getSingleBlogPost = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const post = await BlogPost.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        post,
        readTime: calculate(post.body),
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// get post by a particular author
exports.getPostByAuthor = async (req, res) => {
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   return res.status(400).json({ message: "Invalid ID" });
  // }

  try {
    const posts = await BlogPost.find({ "authorInfo._id": req.params.id });
    console.log(posts);
    res.status(200).json({
      status: "success",
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  const { title, subtitle, body, displayImage, tags, authorInfo } = req.body;

  try {
    const result = await cloudinary.uploader.upload(displayImage, {
      folder: "boye",
    });
    // tags length should less than or equal to 3
    if (tags.length > 3) {
      return res.status(400).json({
        status: "fail",
        message: "You can only add a maximum of 3 tags",
      });
    }

    // add author info to req.body
    const userInfo = req.userId;
    const getAuthorInfo = await User.findById(userInfo);
    const newPost = await BlogPost.create({
      title,
      subtitle,
      body,
      displayImage: {
        url: result.secure_url,
        public_id: result.public_id,
      },
      tags,
      authorInfo: getAuthorInfo,
    });
    res.status(201).json({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: `Can't delete non-existent post` });
  }

  if (req.userId === req.params.id) {
    try {
      const getBlog = await BlogPost.findById(req.params.id);
      await cloudinary.uploader.destroy(getBlog.displayImage.public_id);
      const post = await BlogPost.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: "success",
        data: {
          post,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error,
      });
    }
  } else {
    res.status(400).json({
      status: "fail",
      message: "You can't delete a post you didn't create",
    });
  }
};

// Update a blog post
exports.updateBlogPost = async (req, res) => {
  const { title, subtitle, body, displayImage, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: `Can't update non-existent post` });
  }

  if (req.userId === req.params.id) {
    try {
      const getBlog = await BlogPost.findById(req.params.id);
      const postPID = getBlog?.displayImage?.public_id;
      console.log(postPID);
      if (displayImage) {
        await cloudinary.uploader.destroy(postPID);
      }
      const result = await cloudinary.uploader.upload(displayImage, {
        folder: "boye",
      });
      const updatedPost = {
        title,
        subtitle,
        body,
        displayImage: {
          url: result.secure_url,
          public_id: result.public_id,
        },
        tags,
      };
      const post = await BlogPost.findByIdAndUpdate(
        req.params.id,
        updatedPost,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json({
        status: "success",
        data: {
          post,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error,
      });
    }
  } else {
    res.status(400).json({
      status: "fail",
      message: "You can't update a post you didn't create",
    });
  }
};
