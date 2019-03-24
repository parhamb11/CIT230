// function to receive page data and send back final temperature
function findWindChill() {
    var tempF = parseFloat(document.getElementById('tempF').innerHTML);
    var speed = parseFloat(document.getElementById('speed').innerHTML);
    var output = '';

    // Check for accurate values and only run calculations if
    // temperature and wind speed meet requirements
    var check = checkInput(tempF, speed);
    if (check == false){
        // display Not Applicable
        output = 'N/A';			
    }
    else {
        // send temperature and wind speed to page display
        var wChill = windChill(tempF, speed);
        output = wChill + '&#176;F';
    }

    document.getElementById('windchill').innerHTML = output;
   }

// function to make sure values are valid for the equation
// according to the National Weather Service
function checkInput(tmp, spd){
    if (tmp > 50 || isNaN(tmp) || tmp == ''){
        return false;
    }
    else if (spd < 3 || isNaN(spd) || spd == ''){
        return false;
    }
    else {
        return true;
    }
}

// function to receive temperature and wind speed,
// plug into wind chill equation, 
// and return a new temperature value
function windChill(tmp, spd){
spd = Math.pow(spd, 0.16);
var windChill = 35.74 + (0.6215 * tmp) - (35.75 * spd) + (0.4275 * tmp * spd);
windChill = Math.round(windChill * 10)/10;
return windChill;
}