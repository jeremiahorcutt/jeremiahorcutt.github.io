
function joinNow(){
    window.location.href = "join.html";
}

function changeDisplay(){
    let aside = document.getElementById("weatherAlerts");
    aside.style.display = 'none';
}

//forecast

let request = new XMLHttpRequest();
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=45.6770&lon=-111.0429&exclude=hourly&appid=46c7dd86b763384946891a3bda107a7f&units=imperial";
request.open('Get', apiURL, true);
request.send();

request.onload = function () {
    var data = JSON.parse(request.responseText);
    var weatherLogo = "https://openweathermap.org/img/wn/";
    const forecastArr = data['daily'];
    let j = 0;
    for (var i = 0; i < forecastArr.length; i++) {
        let temp = forecastArr[i].temp;
        if (j < 3){
            var temperature = forecastArr[i].temp.day;
            console.log(temperature);
            document.getElementById(j + "Cast").innerHTML = temperature;
            document.getElementById(j + "Img").setAttribute("src",weatherLogo + forecastArr[i].weather[0].icon + "@2x.png");
            document.getElementById(j + "Img").setAttribute("alt",forecastArr[i].weather[0].description);
            j++;
        }
    }
};

//weather
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const current = jsObject['current'];
    const weather = current.weather;
    document.getElementById('temp').textContent = current.temp;
    document.getElementById('humid').textContent = current.humidity;
    document.getElementById('speed').textContent = current.wind_speed;
    document.getElementById('weat').textContent = weather[0].main;
    doInputOutput(current);

    //weather alerts
    const alerts = jsObject['alerts']; 
    let aside = document.getElementById("weatherAlerts");
    console.log(alerts)
    if (alerts) {
     aside.style.display = (aside.style.display == 'block') ? 'none' : 'block';
     document.getElementById('sender_name').innerHTML = alerts[0].sender_name;
     document.getElementById('event').innerHTML = alerts[0].event;
     document.getElementById('event_description').innerHTML = alerts[0].description;
   }
  });

  

function doInputOutput(current){
    let tempF = current.temp;
    let speed = current.wind_speed;
    let calculatedChill = windChill(tempF, speed);
    windChill(tempF, speed);
    document.getElementById('chill').innerHTML = calculatedChill;
    
}

function windChill(t, s) {
    if (t < 50 && s > 3) {
    let chill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    chill = chill.toFixed(0);
    return chill;
    }
    else {
    chill = "N/A"
    return chill;
    }
}
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + todaysdate.getFullYear();

const oneday = dayNames[todaysdate.getDay() + 1];
const twoday = dayNames[todaysdate.getDay() + 2];
const threeday = dayNames[todaysdate.getDay() + 3];


document.getElementById('1day').innerHTML = oneday;
document.getElementById('2day').innerHTML = twoday;
document.getElementById('3day').innerHTML = threeday;
