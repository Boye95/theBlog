const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UploadSchema = new Schema(
  {
    image: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Upload", UploadSchema);
