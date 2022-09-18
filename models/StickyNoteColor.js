const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StickyColorSchema = new Schema({
  color: { type: String, required: true },
});

module.exports = mongoose.model("color", StickyColorSchema);
