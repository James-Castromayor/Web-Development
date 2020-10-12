const express = require('express');
//install first via npm i body-parser
const bodyParser = require('body-parser');
//get native module
const https = require('https');
const port = 3000;
const porti = 40;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


//get the response
// one res send in any app.get method
app.get ("/", (req,res) => {
  res.sendFile (__dirname + "/index.html");
})

//Works after sending the data via submit button
app.post("/", (req,res) =>{
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const appKey = "32a45b74c07aafdf74ff90b0c5b29f9b";
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+appKey;
  https.get(url, (response) =>
  {
    console.log (response);
    console.log (response.statusCode);
    //get the data
    response.on("data", (data) => {
      console.log(data);
      //Parse the data in JSON
      const weatheData = JSON.parse(data);
      console.log(weatheData);
      //Get the temperature data
      const temp = weatheData.main.temp; // TEMP:
      console.log("Temperature = " + temp);
      //Get the Temp description
      const description = weatheData.weather[0].description;
      //capitalize first letter
      const cDesc = description.charAt(0).toUpperCase() + description.slice(1);
      console.log("Description = " + cDesc);
      //Sample String
      const object = {
        name: "James",
        food: "Bacon"
      }
      //pack it into single string
      console.log(JSON.stringify(object)); //{"name":"James","food":"Bacon"}

      //Get the Icon
      const icon = weatheData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      //res.write compiles the command from res.Send
      res.write("<h1>The temperature is " + temp + " degrees Celsius.</h1>");
      res.write( "<p> and it is a " + cDesc + "</p>");
      res.write("<img src=" +imageUrl +">");

      //Send the data into the website
      //You can have this method or you can do a multiple res.write
      //res.send("<h1>The temperature is " + temp + " and it is a " + cDesc + "</h1>");
      res.send();
    })
  });
  //res.send ("server is up and running");
})


app.listen(port, () =>
{
 console.log(`Example app listening at http://localhost:${port}`);
})
