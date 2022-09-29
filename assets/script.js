var APIKey = "af971021a3754fa8a1492437e6b37e01";

var searchBtn = document.getElementById("searchBtn");
var searchInput = document.getElementById("citySearch");
var city;
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");
var bigCard = "";


console.log(searchInput);
console.log(document.getElementById(searchInput));



searchBtn.addEventListener('click', searchCity);
function searchCity () {
    var searchInput = document.getElementById("citySearch");
city = searchInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`)
    .then(response => response.json())
    .then(function(response){console.log(response);
    var bigCard = document.getElementById("bigCard");
    bigCard.innerHTML = `<h2 id="cityName">${response.name}</h2><p id="temp">Temp:${response.main.temp}</p><p id="wind">Wind:${response.wind.speed}</p><p id="humidity">Humidity:${response.main.humidity}</p>`;})
   
    // function that does 5-day forecast here using different API, separate function from populateCards
    }



function populateCards (response) {
console.log(response);
var bigCard = document.getElementById("bigCard");
bigCard.innerHTML = `<h2 id="cityName">${response.name}</h2><p id="temp">Temp:${response.main.temp}</p><p id="wind">Wind:${response.wind.speed}</p><p id="humidity">Humidity:${response.main.humidity}</p>`;}
// populateCards("Austin");
// searchCity();



console.log(searchInput);
console.log(document.getElementById(searchInput));