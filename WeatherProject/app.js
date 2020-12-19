const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");



const app =  express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");



})

app.post("/", function(req, res){
const query = req.body.cityName;
const apiKey = "822f048f0d90ec0a8bf44e1c792c03fc";
const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}&id=1705545`;
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            //console.log(weatherDescription);
            
            const icon = weatherData.weather[0].icon;
            const imageURl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            res.write(`<p>the weather is currently ${weatherDescription}</p>`);
            res.write(`<h1>The Temperature in ${query} ${temp} degrees celcius</h1>`);
            res.write(`<img src=${imageURl}>`);
            res.send();
        })
    })
})









app.listen(3000, function(){
    console.log("Server running on port 3000");
})