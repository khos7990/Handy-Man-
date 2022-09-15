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
  try {
    console.log(req.body);
    await Post.create({ Post: req.body.JobPost });
    res.status(200).json("ok. Created.");
  } catch (err) {
    res.status(500).json(err);
  }
}
