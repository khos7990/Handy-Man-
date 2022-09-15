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
    console.log(req.body.JobPost);
    await Post.create({
      firstName: req.body.JobPost.firstName,
      lastName: req.body.JobPost.lastName,
      contactNum: req.body.JobPost.contactNum,
      email: req.body.JobPost.email,
      industry: req.body.JobPost.industry,
      country: req.body.JobPost.country,
      province: req.body.JobPost.province,
      city: req.body.JobPost.city,
    });
    res.status(200).json("ok. Created.");
  } catch (err) {
    console.log(err.message);
  }
}
