const apiKey = "b1a995f8dd2a1154009ac272d2f63af9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await responce.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  //it will update the city name

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  // weather main
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
  searchBox.value = "";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value); //it will give the city name
});

checkWeather("Pokhara");
