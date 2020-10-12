//jshint esversion:6
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
//parsing data from form data
//extended true allows us to parse nested dat
app.use(bodyParser.urlencoded({extended:true}));
//const port = 3000;

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/index.html");
})



app.post("/", (req, res) =>{
  //console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var answer = num1 + num2;
  res.send("Thanks for posting! The answer is: " + answer);
})

app.get("/bmicalculator", (req, res) =>{
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", (req, res) =>{
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight / (height * weight);
  res.send("Your BMI is " + bmi);
})


app.listen(3000, () => {
  console.log("Server is running at port 3000.");
})
