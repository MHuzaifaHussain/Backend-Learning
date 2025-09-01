// API creation
// const app = require("express").express();
const express = require("express");
const app = express();


// PORT finding
require("dotenv").config();
const PORT = process.env.PORT || 4000;


// Middleware Addition
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir: '/temp/'
}));

// DB connection
require("./config/database").dbConnect();

//Cloud Connection
require("./config/cloudinary").cloudinaryConnect();

// API Route Mounting
const upload = require("./routes/FileUpload");
app.use('/api/v1/upload', upload);

// Activating Server
app.listen(PORT, ()=>{
    console.log(`App is running at Port no ${PORT}`)
})