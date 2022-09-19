const Post = require("../../models/Post");

module.exports = {
  index,
  create,
  delete: deletePost,
};

async function index(req, res) {
  const posts = await Post.find({});
  res.json(posts);
}

async function create(req, res) {
  try {
    await Post.create(req.body.JobPost);
    res.status(200).json("ok. Created.");
  } catch (err) {
    console.log(err.message);
  }
}

async function deletePost(req, res) {
  try {
    await Post.findOneAndRemove({ _id: req.params.id });
    res.status(200).json("ok. deleted.");
  } catch (err) {
    console.log(err.message);
  }
}
