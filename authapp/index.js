const express = require("express");
const app = express();

require('dotenv').config();


const PORT = process.env.PORT || 4000;


// cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());


// body parser
app.use(express.json());

// const {connect} = require("./config/database")
// dbConnect();

require("./config/database").connect();

// Route import and mount

const user = require("./routes/user");
app.use("/api/v1", user);


// Server Activation

app.listen(PORT, ()=>{
    console.log(`Server Started At port no ${PORT}`)
})