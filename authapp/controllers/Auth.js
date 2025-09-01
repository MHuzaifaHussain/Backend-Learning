const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();


// Singup Route Handler
exports.singup = async (req, res) => {
    try{
        // get data
        const {name, email, password, role} = req.body;
        //Check if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
            //Securing Password
            let hashedPassword;
            try{
                hashedPassword = await bcrypt.hash(password, 10);
            }catch(e){
                return res.status(500).json({
                    success: false,
                    message: "Error in hashing password"
                });
            }
        

        // create entry for user
        const user = await User.create({
            name, email, password : hashedPassword, role
        })

        return res.status(200).json({
            success: true,
            message: "User created Successfully"
        });
    }catch(e){
        console.error(e);
        return res.status(500).json({
            success: false,
            message: "User can not be created Successfully"
        });
    }
}


// login

exports.login = async (req, res) =>{
    try{
        // Data fetch

        const {email, password} = req.body;
        //validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please fill all the details carefully"
            })
        }

        let user = await User.findOne({email});
        //if not a register user
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User is not registered"
            })
        }

        //verify password and generate a JWT token


        const payload = {
            email: user.email,
            id:user._id,
            role:user.role
        }

        if(await bcrypt.compare(password, user.password)){
            //password match
            let token = jwt.sign(payload, 
                                    process.env.JWT_SECRET,
                                    {
                                        expiresIn: "2h",
                                    });
            user = user.toObject();
            user.token = token;
            user.password = undefined;

            const options = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: true
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token, 
                user,
                message: "User logged in successfully"
            })


            // res.status(200).json({
            //         success: true,
            //         token, 
            //         user,
            //         message: "User logged in successfully"
            //     })

        }else{
            // password does't matchB
            return res.status(403).json({
                success: false,
                message: "Password Incorrect"
            })
        }
    }catch(e){
        console.error(e);
        return res.status(500).json({
            success: false,
            message: "Login Failure"
        });
    }
}