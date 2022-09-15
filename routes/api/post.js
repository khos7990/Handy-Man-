const express = require("express");
const router = express.router();
const postCtrl = require("../../controllers/api/post");

router.get("/", postCtrl.index);

router.post("/", postCtrl.create);

module.exports = router;
