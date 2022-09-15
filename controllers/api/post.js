const Post = require("../../models/Post");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  const posts = await Post.find({});
  res.json(posts);
}

async function create(req, res) {
  console.log(req.body);
}
