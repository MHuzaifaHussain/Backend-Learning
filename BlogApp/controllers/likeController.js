const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// Business Logic

exports.likePost = async (req, res)=>{
    try{
        // Fetch Data
        const{post, user} = req.body;

        const like = new Like({
            post,
            user
        });
        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
                            .populate("likes") 
                            .exec();
        res.status(200).json({
            post: updatedPost,
        })
    }catch(e){
        return res.status(500).json({
            error: `Error while liking post ${e}`,
        })
    }
}
exports.unlikePost = async (req, res)=>{
    try{
        // Fetch Data
        const{post, like} = req.body;

        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});


        // Update the post collection

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true})
                            .populate("likes")
                            .exec();
        res.json({
            post: updatedPost,
        })
    }catch(e){
        return res.status(500).json({
            error: `Error while un liking post ${e}`,
        })
    }
}