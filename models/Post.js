const mongoose = require("mongoose");
const StickyNoteColor = require("./StickyNoteColor");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contactNum: { type: Number, required: true },
    email: { type: String, required: true },
    industry: { type: Array, required: true },
    country: { type: String, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    details: { type: String },
    color: { type: mongoose.Schema.Types.ObjectId, ref: "StickyNoteColor" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
