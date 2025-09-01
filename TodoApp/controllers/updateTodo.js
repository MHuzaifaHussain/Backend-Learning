// Importing Schema
const Todo = require("../models/Todo");

// Defining Route Handler

exports.updateTodo = async(req, res)=>{
    try{
        const{id}= req.params;
        const{title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()},
        )
        res.status(200).json({
            success : true,
            data: todo,
            message: `Data updated with given id ${id}`,
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