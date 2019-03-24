
/* create and open new request */

let weatherRequest = new XMLHttpRequest();
    weatherRequest.open ("GET", "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8e1a736087687a18e9a7c143c82fd186", true);
/* send the request */
weatherRequest.send();

/* get response from server and do something with it */

weatherRequest.onload = function() {
        let weatherData = JSON.parse(weatherRequest.response);
        console.log(weatherData);
        let currentTemp = weatherData;
        var span = document.querySelector('#currentTemp');
        Temperature(currentTemp);

/* display current temperature on test page, thanks Sis. Campbell for helping me streamline this */

function Temperature(jsonObj) {
    var outputMain = jsonObj.list[0].main.temp;
    console.log(outputMain);
    var myP = document.createElement('p');

    myP.textcontent = outputMain;

    span.innerHTML = outputMain;
}
}