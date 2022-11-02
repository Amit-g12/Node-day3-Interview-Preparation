//How do you create a simple Express.js application?
const express = require('express');
const app = express();

//Implementation of all type of exports in backend application
const name = require("./app");
console.log(name);
//Create a middleware which will be applicable to all the routes
const middlewareTwo = (req,res,next) => {
    console.log("My First middleware");
    next();
}

app.get('/',(req,res) =>{
    res.send("Home Page");
})

app.get('/About',(req,res) => {
    res.send("About Page");
})

app.get("/contact",middlewareTwo,(req,res) => {
    res.send("This is contact  page");
})

app.get("/author",middlewareTwo,(req,res) => {
    res.send("Author: Amit");
})

app.listen(5000,function() {
    console.log("Server running...");
})

//Implement CORS.
const cors = require('cors');
app.use(cors());

 