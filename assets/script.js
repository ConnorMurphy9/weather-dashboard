var APIKey = "af971021a3754fa8a1492437e6b37e01";

var searchBtn = document.getElementById("searchBtn");
var searchInput = document.getElementById("citySearch");
var city;
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");
var bigCard = "";
var smallCardsText = document.querySelector(".small-cards");

console.log(searchInput);
console.log(document.getElementById(searchInput));



searchBtn.addEventListener('click', searchCity);
function searchCity () {
    var searchInput = document.getElementById("citySearch");
city = searchInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`)
    .then(response => response.json())
    .then(function(data){console.log(data);
    var bigCard = document.getElementById("bigCard");
    bigCard.innerHTML = `<h2 id="cityName">${data.name}</h2><p id="temp">Temp:${data.main.temp}</p><p id="wind">Wind:${data.wind.speed}</p><p id="humidity">Humidity:${data.main.humidity}</p>`;})
   
    // function that does 5-day forecast here using different API, separate function from populateCards
    populateSmallCards();
    }



function populateCards (data) {
console.log(data);
var bigCard = document.getElementById("bigCard");
bigCard.innerHTML = `<h2 id="cityName">${data.name}</h2><p id="temp">Temp:${data.main.temp}</p><p id="wind">Wind:${data.wind.speed}</p><p id="humidity">Humidity:${data.main.humidity}</p>`;}
// populateCards("Austin");
// searchCity();

function populateSmallCards () {
var smallCardsText = document.querySelector(".small-cards");
console.log(smallCardsText);
var searchInput = document.getElementById("citySearch");
city = searchInput.value;
 fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`)
.then(response => response.json())
.then(function(data1) {console.log(data1)
    smallCardsText.innerHTML = "";
    console.log(smallCardsText);
    var x = 6;
    for (let i = 0; i < 5; i++) {
        var splitDate = data1.list[x].dt_txt.split(" ")
        console.log(splitDate);
    smallCardsText.innerHTML += 
        `<div class="five-day-forecast">
         <h4>${"Day " + (i + 1)}, ${splitDate[0]}</h4>
         <div class= "card-body">
            <p id="temp1"> temp: ${data1.list[x].main.temp}</p>
            <p id="humidity"> humidity: ${data1.list[x].main.humidity}</p>
            <p id="wind"> wind: ${data1.list[x].wind.speed}
         </div>
         </div>`
       
        x = x + 8;
}
})}



// console.log(searchInput);
// console.log(document.getElementById(searchInput));