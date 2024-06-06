//cobject for storing functions , variables that will use API
//Firt you need a apikey to access weather , NB you need a account for https://openweathermap.org/

let weather = {
    apiKey : "8c0ac7461bb29fcb30a0f0576f7db469",
    fetchWeather : function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data) {
        const { name}  = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather today in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"; // to make small just remove the "2"
        document.querySelector(".description").innerText = "Overview: " + description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    },    
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
 
document
   .querySelector(".search button")
   .addEventListener("click", function () {
    weather.search();

   }); 

document
.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
 if (event.key == "Enter") {
    weather.search();
 }
})

