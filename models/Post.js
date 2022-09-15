const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contactNum: { type: Number, required: true },
    email: { type: String, required: true },
    industry: { type: String, required: true },
    country: { type: String, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
