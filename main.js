const apiKey = "be6a9526a1f678a927a298ee9d92dfdc";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather (city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    weatherDisplay(data.weather[0].main);

    console.log(data)
    displayData(data)

    
}

function displayData(data) {
    document.querySelector('.city').innerHTML = data.name;

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp);

    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

    document.querySelector('.wind').innerHTML = data.wind.speed;
}


searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
    searchBox.value = ""
})

function weatherDisplay(weather) {
    if (weather == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (weather == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (weather == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (weather == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (weather == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (weather == "Snow") {
        weatherIcon.src = "images/snow.png";
    }
}
