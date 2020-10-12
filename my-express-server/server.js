//jshint esversion:6
const express = require("express");

const app = express();

//Shows what will happen when the browser gets the homeroot
//Targeting Route "/"
app.get("/", function (req, res){
  res.send("<h1>Hello</h1>");
});

//Target contact Route
app.get("/contact", function (req, res){
  res.send("Contact me: castromayor.james@gmail.com");
});

//Target About Route
app.get("/about", function (req, res){
  res.send("<h2>Hi! My name is James and I am a software developer.</h2>");
});

//Target About Route
app.get("/documentation", function (req, res){
  res.send("<h3>Documentation.</h2>");
});


//make a callback function
//start a server at port 3000
app.listen(3000, function (){
  console.log("Server started at port: 3000");
});
