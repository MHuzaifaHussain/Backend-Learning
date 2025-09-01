const Post = require("../models/postModel");

exports.createPost  = async (req,res) =>{
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body,
        });
        const savedPost = await post.save();

        res.json({
            post : savedPost,
        })
    }catch(e){
        return res.status(400).json({
            error: "Error while creating the post",
        })
    }
}

exports.getAllPosts  = async (req,res) =>{
    try{
        
        // const allPost = await Post.find();
        // const allPost = await Post.find().populate("comments").exec();
        const allPost = await Post.find().populate("likes").populate("comments").exec();

        res.json({
            allPost,
        })
    }catch(e){
        return res.status(400).json({
            error: "Error while fetching the post",
        })
    }
}