const fs = require('fs');

// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

const express = require('express');
const server = express();

//MiddleWare

server.use((req,res,next)=>{
    console.log(req.method, req.ip, req.hostname, req.get('user-agent'));
    next();
})


//API - Endpoint - Route
server.get('/', (req,res)=>{
    res.json({type:'GET'})
})
server.post('/', (req,res)=>{
    res.json({type:'POST'})
})
server.put('/', (req,res)=>{
    res.json({type:'PUT'})
})
server.delete('/', (req,res)=>{
    res.json({type:'DELETE'})
})
server.patch('/', (req,res)=>{
    res.json({type:'PATCH'})
})





server.get('/demo', (req,res)=>{
    res.status(201).send('<h1>Hello</h1>');
    // res.sendFile('E:\Express-JS\index.html');
    // res.json();
    // res.sendStatus(404);
})













server.listen(8080, ()=>{
    console.log('Server Started');
});