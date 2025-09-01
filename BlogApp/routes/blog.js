const express = require("express")
const router = express.Router();


// Import Controller
const {createComment} = require("../controllers/commentController")
const {createPost, getAllPosts} = require("../controllers/postController")
const {likePost, unlikePost} = require("../controllers/likeController")

//Mapping
router.post("/Comments/create", createComment);
router.post("/Posts/create", createPost);
router.get("/Posts", getAllPosts);
router.post("/Likes/like", likePost);
router.post("/Likes/unlike", unlikePost);

//Export
module.exports = router;