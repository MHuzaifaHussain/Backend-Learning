const express = require("express");
const router = express.Router();


const {login, singup} = require("../controllers/Auth");
const {auth,isStudent, isAdmin} = require("../middleware/auth");
const User = require("../models/user")


router.post("/login", login);
router.post("/singup", singup);

//Protected Routes

router.get("/test", auth, (req, res)=>{
    res.json({
        success: true,
        message: "Welcome to the protected route for Tests"
    })
})
router.get("/student", auth, isStudent,(req, res)=>{
    res.json({
        success: true,
        message: "Welcome to the protected route for students"
    })
})
router.get("/admin", auth, isAdmin,(req, res)=>{
    res.json({
        success: true,
        message: "Welcome to the protected route for Admin"
    })
})

// router.get("/getEmail", auth , async (req, res) => {
//     try{
//         const id = req.user.id;
//         console.log("Id", id);
//         const user = await User.findById(id);

//         res.status(200).json({
//             success: true,
//             user: user,
//             message: "Welcome to the email route",
//         })
//     }catch(e){
//         res.status(500).json({
//             success: false,
//             error: e.message,
//             message: "Error in code",
//         })
//     }
// })
module.exports = router;