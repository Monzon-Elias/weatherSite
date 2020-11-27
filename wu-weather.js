//FRANKLIN CITY AJAX

var request2 = new XMLHttpRequest();
request2.open('GET', "//api.openweathermap.org/data/2.5/weather?q=Franklin&units=imperial&APPID=2d683c1fb0de4088f43e9dc236bb0842", true);
request2.send();
request2.onload = function () {
    var franklinWeather = JSON.parse(request2.responseText);
    console.log(franklinWeather);

    document.getElementById("textForecast").innerHTML = franklinWeather.weather[0].description; // current weather description

    document.getElementById('currentTemp').innerHTML = franklinWeather.main.temp; //Temperature in Celsius.

    document.getElementById("currentWeatherIcon").src = "https://openweathermap.org/img/wn/" + franklinWeather.weather[0].icon + "@2x.png"; //Current weather icon status.
    
    document.getElementById('windSpeed').innerHTML = franklinWeather.wind.speed; //Wind Speed in miles per hour.
} 

//GREENVILLE CITY AJAX

var requestG = new XMLHttpRequest();
requestG.open('GET', "//api.openweathermap.org/data/2.5/weather?q=Greenville&units=imperial&APPID=2d683c1fb0de4088f43e9dc236bb0842", true);
requestG.send();

requestG.onload = function () {
    var greenvilleWeather = JSON.parse(requestG.responseText);
    console.log(greenvilleWeather);

    document.getElementById("textForecastG").innerHTML = greenvilleWeather.weather[0].description; // current weather description
    
    document.getElementById('currentTempG').innerHTML = greenvilleWeather.main.temp; //Temperature in Celsius.
    
    document.getElementById("currentWeatherGIcon").src = "https://openweathermap.org/img/wn/" + greenvilleWeather.weather[0].icon + "@2x.png"; //Current weather icon status.

    document.getElementById('windSpeedG').innerHTML = greenvilleWeather.wind.speed; //Wind Speed in miles per hour.
} 

//SPRINGFIELD CITY AJAX

var requestS = new XMLHttpRequest();
requestS.open('GET', "//api.openweathermap.org/data/2.5/weather?q=Springfield&units=imperial&APPID=2d683c1fb0de4088f43e9dc236bb0842", true);
requestS.send();

requestS.onload = function () {
    var springfieldWeather = JSON.parse(requestS.responseText);
    console.log(springfieldWeather);

    document.getElementById("textForecastS").innerHTML = springfieldWeather.weather[0].description; // current weather description

    document.getElementById('currentTempS').innerHTML = springfieldWeather.main.temp; //Temperature in Celsius.
    
    document.getElementById("currentWeatherSIcon").src = "https://openweathermap.org/img/wn/" + springfieldWeather.weather[0].icon + "@2x.png"; //Current weather icon status.

    document.getElementById('windSpeedS').innerHTML = springfieldWeather.wind.speed; //Wind Speed in miles per hour.
} 
