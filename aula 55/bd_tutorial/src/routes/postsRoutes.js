const express = require("express");
const router = express.Router();

const postsControllers = require("../controllers/postsControllers");


router.put("/:id", postsControllers.updatePost);
router.delete("/:id", postsControllers.deletePost);

module.exports = router;