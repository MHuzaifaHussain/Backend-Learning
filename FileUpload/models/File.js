const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
    },
    tags:{
        type:String,
    },
    email: {
        type: String
    }
})

//Post Middleware
fileSchema.post("save", async function(doc){
    try{
        //Transporter Creation
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            service: 'gmail',
            port: 8000,
            secure: false, // use SSL
            auth:{
                user : process.env.MAIL_USER,
                pass : process.env.MAIL_PASS,
            }
        });

        //Sending Mail
        let info = await transporter.sendMail({
            from : `CodeHelp`,
            to: doc.email,
            subject: "New File Uploaded Successfully",
            html: `<h2>Congratulations</h2><p>File Uploaded Successfully <br/> View here: <br/><a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`
        })

        console.log("Info", info);
    }catch(e){
        console.log("Error", e);
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;