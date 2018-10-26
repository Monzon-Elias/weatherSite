//
//FRANKLIN CITY AJAX
//

//FROM FEATURE: FORECAST//

var request2 = new XMLHttpRequest();
request2.open('GET', '//api.wunderground.com/api/2bd1927be404d108/forecast/q/MN/Franklin.json', true);
request2.send();

request2.onload = function () {
    var franklinWeather = JSON.parse(request2.responseText);
    console.log(franklinWeather);

    document.getElementById("textForecast").innerHTML = franklinWeather.forecast.txt_forecast.forecastday[0].fcttext;

} //end of onload 2

//FROM FEATURE: CONDITIONS//

var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', '//api.wunderground.com/api/2bd1927be404d108/conditions/q/MN/Franklin.json', true);

weatherObj.send();
weatherObj.onload = function () {
    var weatherInfo = JSON.parse(weatherObj.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full; //City-State

    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f; //Temperature in Celsius.

    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather; //Current weather status.
    
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph; //Wind Speed in miles per hour.
    
    document.getElementById('textForecast').innerHTML = weatherInfo.current_observation.wind_mph; // Text description forecast for the most current period in Fahrenheit.
    
    var icon_path = weatherInfo.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);
    if (found >= 0) {
        icon_path = icon_path.replace("http", "https");
    }
    document.getElementById('wi').src = icon_path;
} //end of onload 1

//
//GREENVILLE CITY AJAX
//

//FROM FEATURE: FORECAST//

var requestG = new XMLHttpRequest();
requestG.open('GET', '//api.wunderground.com/api/2bd1927be404d108/forecast/q/TX/Greenville.json', true);
requestG.send();

requestG.onload = function () {
    var greenvilleWeather = JSON.parse(requestG.responseText);
    console.log(greenvilleWeather);

    document.getElementById("textForecastG").innerHTML = greenvilleWeather.forecast.txt_forecast.forecastday[0].fcttext;

} //end of onload 2

//FROM FEATURE: CONDITIONS//

var weatherObjG = new XMLHttpRequest();
weatherObjG.open('GET', '//api.wunderground.com/api/2bd1927be404d108/conditions/q/TX/Greenville.json', true);

weatherObjG.send();
weatherObjG.onload = function () {
    var weatherInfoG = JSON.parse(weatherObjG.responseText);
    console.log(weatherInfoG);

    document.getElementById('placeG').innerHTML = weatherInfoG.current_observation.display_location.full; //City-State

    document.getElementById('currentTempG').innerHTML = weatherInfoG.current_observation.temp_f; //Temperature in Celsius.

    document.getElementById('currentWeatherG').innerHTML = weatherInfoG.current_observation.weather; //Current weather status.

    document.getElementById('windSpeedG').innerHTML = weatherInfoG.current_observation.wind_mph; //Wind Speed in miles per hour.

    document.getElementById('textForecastG').innerHTML = weatherInfoG.current_observation.wind_mph; // Text description forecast for the most current period in Fahrenheit.

    var icon_pathG = weatherInfoG.current_observation.icon_url;
    var urlStringG = document.location.href;
    console.log(urlStringG);
    var foundG = urlStringG.indexOf("https");
    console.log(foundG);
    if(foundG >= 0){
        icon_pathG = icon_pathG.replace("http", "https");
    }
    document.getElementById('wiG').src = icon_pathG;
} //end of onload 1

//
//SPRINGFIELD CITY AJAX
//

//FROM FEATURE: FORECAST//

var requestS = new XMLHttpRequest();
requestS.open('GET', '//api.wunderground.com/api/2bd1927be404d108/forecast/q/OR/Springfield.json', true);
requestS.send();

requestS.onload = function () {
    var springfieldWeather = JSON.parse(requestS.responseText);
    console.log(springfieldWeather);

    document.getElementById("textForecastS").innerHTML = springfieldWeather.forecast.txt_forecast.forecastday[0].fcttext;

} //end of onload 2

//FROM FEATURE: CONDITIONS//

var weatherObjS = new XMLHttpRequest();
weatherObjS.open('GET', '//api.wunderground.com/api/2bd1927be404d108/conditions/q/OR/Springfield.json', true);

weatherObjS.send();
weatherObjS.onload = function () {
    var weatherInfoS = JSON.parse(weatherObjS.responseText);
    console.log(weatherInfoS);

    document.getElementById('placeS').innerHTML = weatherInfoS.current_observation.display_location.full; //City-State

    document.getElementById('currentTempS').innerHTML = weatherInfoS.current_observation.temp_f; //Temperature in Celsius.

    document.getElementById('currentWeatherS').innerHTML = weatherInfoS.current_observation.weather; //Current weather status.

    document.getElementById('windSpeedS').innerHTML = weatherInfoS.current_observation.wind_mph; //Wind Speed in miles per hour.

    document.getElementById('textForecastS').innerHTML = weatherInfoS.current_observation.wind_mph; // Text description forecast for the most current period in Fahrenheit.

    var icon_pathS = weatherInfoS.current_observation.icon_url;
    var urlStringS = document.location.href;
    console.log(urlStringS);
    var foundS = urlStringS.indexOf("https");
    console.log(foundS);
    if(foundS >= 0){
        icon_pathS = icon_pathS.replace("http", "https");
    }
    document.getElementById('wiS').src = icon_pathS;
} //end of onload 1
