const Tags = require("../models/tagsModel");
const mongoose = require("mongoose");

// create tags
exports.createTags = async (req, res) => {
  try {
    const newTag = await Tags.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tag: newTag,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// get tags
exports.getTags = async (req, res) => {
  try {
    const tags = await Tags.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: "success",
      results: tags.length,
      data: {
        tags,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// update tags
exports.updateTags = async (req, res) => {
  const { name } = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: `Can't update non-existent post` });
  }
  const updatedTag = {
    name,
  }
  try {
    const tag = await Tags.findByIdAndUpdate(req.params.id, updatedTag, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tag,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
