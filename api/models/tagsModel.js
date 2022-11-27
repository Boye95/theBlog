const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TagsSchema = new Schema(
  {
    name: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tags", TagsSchema);