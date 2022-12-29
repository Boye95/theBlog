const BlogPost = require("../models/blogPostsModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");
const { calculate } = require("calculate-readtime");
// const validator = require("validator");
const { Configuration, OpenAIApi } = require("openai");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

// openAI config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

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
    const post = await BlogPost.findById(req.params.id).populate("authorInfo", [
      "avatar",
      "name",
      "about",
      "_id",
    ]);
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
  // query by user
  // const authorId = req.query.authorInfo;
  try {
    // fetch posts by author query
    const posts = await BlogPost.find({
      authorInfo: req.params.id,
    }).populate("authorInfo", ["avatar", "name", "about", "_id"]);
    // console.log(posts)
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

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  const { title, subtitle, body, displayImage, tags, authorInfo } = req.body;

  // logic for posts created using openAI
  if (req.body.imagePrompt) {
    const prompt = req.body.imagePrompt;

    try {
      // creating image from prompt
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      });
      const imageUrl = response.data.data[0].url;

      res.status(201).json({
        status: "success",
        data: {
          post: imageUrl,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error,
      });
    }
  } else if (req.body.postPrompt) {
    const postPrompt = req.body.postPrompt;

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: postPrompt,
        temperature: 0.7,
        max_tokens: 512,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      const aiPost = response.data.choices[0].text;

      res.status(201).json({
        status: "success",
        data: {
          postAi: aiPost,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error,
      });
    }
  } else {
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
      const newPost = await BlogPost.create({
        title,
        subtitle,
        body,
        displayImage: {
          url: result.secure_url,
          public_id: result.public_id,
        },
        tags,
        authorInfo: userInfo,
      });

      // save post to authors schema
      const author = await User.findById(req.userId);

      author.posts.push(newPost._id);
      await author.save();

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
  }
};

// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: `Can't delete non-existent post` });
  }

  // if (req.userId === req.params.id) {
  //   console.log(req.userId);

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
  // } else {
  //   res.status(400).json({
  //     status: "fail",
  //     message: "You can't delete a post you didn't create",
  //   });
  // }
};

// Update a blog post
exports.updateBlogPost = async (req, res) => {
  const { title, subtitle, body, displayImage, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: `Can't update non-existent post` });
  }

  // if (req.userId === req.params.id) {
  try {
    const getBlog = await BlogPost.findById(req.params.id);
    const postPID = getBlog?.displayImage?.public_id;
    // console.log(postPID);
    let result;
    if (displayImage) {
      if (postPID) {
        await cloudinary.uploader.destroy(postPID);
      }
      result = await cloudinary.uploader.upload(displayImage, {
        folder: "boye",
      });
    }
    const updatedPost = {
      title,
      subtitle,
      body,
      tags,
    };

    if (displayImage) {
      updatedPost.displayImage = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }
    const post = await BlogPost.findByIdAndUpdate(req.params.id, updatedPost, {
      new: true,
      runValidators: true,
    });
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
  // } else {
  //   res.status(400).json({
  //     status: "fail",
  //     message: "You can't update a post you didn't create",
  //   });
  // }
};

// admin controllers
//
