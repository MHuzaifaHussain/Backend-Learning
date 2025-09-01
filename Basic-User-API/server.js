// Step 1: Create a folder.
// Step 2: move into that folder.
// Step 3: npm init -y
// Step 4: Open folder using VSCode
// Step 5: npm i express
// Step 6: Create server.js

const { request } = require("express");

// Server Initiate

const express = require('express');
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

// Specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

app.listen(9000, ()=>{
    console.log("Server Started successfully");
})

// Routes 

app.get('/', (req, res)=>{
    res.send("<h1>Backend Started</h1>");
})

app.post('/api/cars', (req, res)=>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car data submitted Successfully");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connection Successful")
})
.catch((e)=>{console.log("Error Received")});

