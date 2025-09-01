// Creating Server 
const express = require('express'); // require do function of import
const app = express();

// Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 8080;

// Middleware to parse json request body
app.use(express.json());

// Import Routes for TODO API

const todoRoutes = require("./routes/todos");
// mount the API routes
app.use("/api/v1", todoRoutes);

// Start Server


app.listen(PORT, ()=>{
    console.log(`Server Started successfully ${PORT}`);
})

// Connecting To The Database
const dbConnect = require("./config/database");
dbConnect();

// Default Route
app.get("/", (req, res)=>{
    res.send(`<h1>This Is Default Page</h1>`)
})