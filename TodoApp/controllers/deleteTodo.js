// Importing Schema
const Todo = require("../models/Todo");

// Defining Route Handler

exports.deleteTodo = async(req, res)=>{
    try{
        const{id}= req.params;

        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message: `Data deleted with given id ${id}`,
        })
    }catch(e){
        console.error(e);
        res.status(500).json(
            {
                success:false,
                data:'Internal Server Error',
                message:e.message
            }
        )
    }
}