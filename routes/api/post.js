const express = require("express");
const router = express.Router();
const postCtrl = require("../../controllers/api/post");

router.get("/", postCtrl.index);

router.post("/", postCtrl.create);

router.delete("/:id", postCtrl.delete);

module.exports = router;
