// Importing Schema
const Todo = require("../models/Todo");

// Defining Route Handler

exports.getTodo = async(req, res)=>{
    try{
        // Fetch all todo items from database
        const todos = await Todo.find({});

        //response update
        res.status(200).json(
            {
                success: true,
                data: todos,
                message: 'Entire data is fetched'
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

exports.getTodoById = async(req, res)=>{
    try{
        // Extract Todo item basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        // Data for given id not found
        if (!todo){
            return res.status(404).json({
                success : false,
                message: "No Data found with given id",
            })
        }
        // Data for given id found
        res.status(200).json({
            success : true,
            data: todo,
            message: `Data found with given id ${id}`,
        })
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