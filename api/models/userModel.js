const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      url: {
        type: String,
        required: false,
      },
      public_id: {
        type: String,
        required: false,
      },
    },
    about: {
      type: String,
      required: false,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "BlogPost",
      }
    ],
  },
  { timestamp: true }
);

module.exports = User = mongoose.model("user", UserSchema);
