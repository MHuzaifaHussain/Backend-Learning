const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Business Logic

exports.createComment = async (req, res)=>{
    try{
        // Fetch Data
        const{post, user, body} = req.body;

        const comment = new Comment({
            post,
            user,
            body
        });
        const savedComment = await comment.save();

        // find the post by ID, then add new comment to comment array in post model
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
                            .populate("comments") // Populate the comments array with comment documents
                            .exec();
        res.status(200).json({
            post: updatedPost,
        })
    }catch(e){
        return res.status(500).json({
            error: `Error while creating comment ${e}`,
        })
    }
}