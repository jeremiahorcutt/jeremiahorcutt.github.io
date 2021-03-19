// json file load reviews
const requestreviews = 'reviews.json';

fetch(requestreviews)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const reviews = jsonObject['review'];
    var a, b, c;
    a = Math.round(Math.random() * 10);
    b = Math.round(Math.random() * 10);
    if (b == a){
        b =  Math.round(Math.random() * 10);
    }
    c = Math.round(Math.random() * 10);
    if (c == a | c == b){
        c = Math.round(Math.random() * 10);
    }
    var index = [a, b, c];
    for (let i = 0; i < index.length; i++ ) {
        let review = document.createElement('div');
        review.setAttribute("id","review" + i);
        review.setAttribute("class","review");

        let h2 = document.createElement('h2');
        h2.setAttribute("class","reviewname")

        let comment = document.createElement('p');
        comment.setAttribute("class","comment")

        let rate = document.createElement('h2');
        rate.setAttribute("class","rate");


h2.textContent = reviews[index[i]].name;
comment.textContent = "'" + reviews[index[i]].comment + "'";
rate.textContent = reviews[index[i]].rate; 

review.appendChild(rate);
review.appendChild(h2);
review.appendChild(comment);
document.querySelector('div#reviews').appendChild(review);
    }
      });

//menu
const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navBar');

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



//forecast

let request = new XMLHttpRequest();
const apiURLF = "https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&units=imperial&appid=46c7dd86b763384946891a3bda107a7f";
request.open('Get', apiURLF, true);
request.send();

request.onload = function () {
    var data = JSON.parse(request.responseText);
    console.log(data);
    var weatherLogo = "https://openweathermap.org/img/wn/";
    const forecastArr = data.list;
    let j = 0;
    for (var i = 0; i < forecastArr.length; i++) {
        var dt = forecastArr[i].dt_txt;
        var time = dt.includes('18:00:00');
        if (time == true && j < 3){
            var temperature = data.list[i].main.temp;
            console.log(temperature);
            document.getElementById(j + "Cast").innerHTML = temperature;
            document.getElementById(j + "Img").setAttribute("src",weatherLogo + data.list[i].weather[0].icon + "@2x.png");
            document.getElementById(j + "Img").setAttribute("alt",data.list[i].weather[0].description);
            j++;
        }
    }
};

//weather
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=imperial&appid=46c7dd86b763384946891a3bda107a7f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const weather = jsObject['weather'];
    const main =jsObject['main'];
    const wind =jsObject['wind'];
    document.getElementById('temp').textContent = main.temp;
    document.getElementById('humid').textContent = main.humidity;
    document.getElementById('speed').textContent = wind.speed;
    document.getElementById('weat').textContent = weather[0].main;
    doInputOutput(main, wind);
  });

  

function doInputOutput(main, wind){
    let tempF = main.temp;
    let speed = wind.speed;
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
