const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('.locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');
const body = document.querySelectorAll('body');

const apiKey = '8db903d71d0241d688665045241704&q'; // Replace 'YOUR_API_KEY' with your actual API key

function SearchDate(){

}

function ForcastPage() {
    window.location.href = "forcast.html";
  }

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        fetchWeatherData( e.target.innerHTML);
        app.style.opacity = "1";
    });
});


function handleSearch(){
    
    if (search.value.length == 0) {
        alert('please type in a city name');
    } else {
        fetchWeatherData(search.value);
        search.value = "";
        app.style.opacity = "0";
    }
}



function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${month}/${day}/${year}`).getDay()];
};

function  fetchWeatherData(Location) {

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}=${Location}`)
        .then(Response => Response.json())
        .then(data => {
            if(data.location.name==0){
                fetchWeatherData();
            }
            temp.innerHTML = data.current.temp_c + "&#176";
            nameOutput.innerHTML=data.location.name;
            

            const locTime = data.location.localtime;
            const y = parseInt(locTime.substr(0, 4));
            const m = parseInt(locTime.substr(5, 2));
            const d = parseInt(locTime.substr(8, 2));
            const time = locTime.substr(11);

            dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)}, ${m} ${y}`;
            timeOutput.innerHTML = time;

            const iconID = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);
            console.log(iconID);
            icon.src = "./icon/" + iconID;
            

            cloudOutput.innerHTML = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_kph + "km/h";

            let timeOfDay = "day";
            const code = data.current.condition.code;

            if (!data.current.is_day) {
                timeOfDay = "night";
            }
            if (code == 1000) {
                app.style.backgroundImage = `url(./images/frank-mckenna-eXHeq48Z-Q4-unsplash.jpg)`;
                app.style.color = "#1e272e";
                if (timeOfDay == "night") {
                    app.style.color = "#181e27";
                }
            } else if (
                code == 1003 ||
                code == 1006 ||
                code == 1009 ||
                code == 1030 ||
                code == 1069 ||
                code == 1087 ||
                code == 1135 ||
                code == 1273 ||
                code == 1276 ||
                code == 1279 ||
                code == 1282
            ) {
                app.style.backgroundImage = `url(./images/cloudy2.jpg)`;
                btn.style.background = "#fa6d1b";
                app.style.color="#2c3e50";
                if (timeOfDay == "night") {
                    btn.style.background = "##1e272e";
                    
                }
            } else if (
                code == 1003 ||
                code == 1063 ||
                code == 1072 ||
                code == 1150 ||
                code == 1153 ||
                code == 1180 ||
                code == 1183 ||
                code == 1186 ||
                code == 1189 ||
                code == 1192 ||
                code == 1195 ||
                code == 1204 ||
                code == 1207 ||
                code == 1240 ||
                code == 1243 ||
                code == 1246 ||
                code == 1249 ||
                code == 1252
            ) {
                app.style.backgroundImage = `url(./images/rainy.jpg)`;
                btn.style.background = "#647d75";
                app.style.color="#ecf0f1";
                if (timeOfDay == "night") {
                    btn.style.background = "#325c80";
                } else {
                    app.style.backgroundImage = `url(./images/pexels-ekamelev-813871.jpg)`;
                    btn.style.background = "#4d72aa";
                    app.style.color="#ecf0f1";
                    if (timeOfDay == "night") {
                        btn.style.background = "#1b1b1b";
                    }
                }
            }
            app.style.opacity = "1";
        })
        .catch(()=>{
            alert('city not founded,please try again');
            app.style.opacity="1";
        });
    
}
fetchWeatherData("kandy");
