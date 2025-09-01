// Importing Schema
const Todo = require("../models/Todo")

// Defining Route Handler

exports.createTodo = async(req, res)=>{
    try{
        // Extract Title and Description from request body
        const{title, description} = req.body;
        // Created a new Todo Object and insert in DB
        const response = await Todo.create({title, description});
        // Send a JSON response with success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully'
            }
        )
    }catch(e){
        console.error(e);
        console.log(e);
        res.status(500).json(
            {
                success:false,
                data:'Internal Server Error',
                message:e.message
            }
        )
    }
}