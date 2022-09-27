var APIKey = "af971021a3754fa8a1492437e6b37e01";
var cityNameRequest = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={af971021a3754fa8a1492437e6b37e01}';
var searchBtn = document.getElementById("searchBtn");
addEventListener('click' , searchBtn);
var city = document.getElementById("citySearch");
console.log(city);
var cityQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;





// function getApi(cityQueryURL) {
//     fetch(cityQueryURL)
//     .then(function (response) {
//         console.log(response);
//     }



// }
