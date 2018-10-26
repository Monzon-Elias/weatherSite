function computeNum() {
	// Input - get input and validate if correct length and if a number
	var high = parseFloat(document.getElementById('h').textContent);
    var low = parseFloat(document.getElementById('l').textContent);
    var windSpeed = parseFloat(document.getElementById('ws').textContent);

	// Processing
	var windTempAvg = (high + low)/2; // taking the average temperature of the wind.
	var windChill = 35.74 + .6215 * windTempAvg - 35.75 * Math.pow(windSpeed, .16) + .4275* windTempAvg * Math.pow(windSpeed, .16); // calculating the windChill.
	
	// Output inside the table
	document.getElementById("wch").innerHTML = windChill.toFixed(2);
}