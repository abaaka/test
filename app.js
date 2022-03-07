const express= require("express");
const https= require("https");

const app = express();

app.get("/",function(req,res){

  const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=a9520c894a016d8d87705248303552eb"

  https.get (url,function(response){
     console.log(response);

     response.on("data", function(data){
       const weatherData=JSON.parse(data)
       const temp = weatherData.main// TEMP:
       const weatherDescription=weatherData.weather[0].weatherDescription
       res.send("The temperature in London is "+temp+"degree");
     })

  })
})
