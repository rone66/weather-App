const apiKey = "d626ac8628dd3ab90f551643a2cd8080";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

document.addEventListener("DOMContentLoaded", () => {
  let searchInput = document.getElementById("searchInput");
  let searchBtn = document.getElementById("btn");
  const weatherIcon=document.querySelector(".weather-icon")
  //console.log(searchBtn);

  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
    }else{
        document.querySelector(".error").style.display="none";
    }
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp/10) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main=='Clouds'){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=='Clear'){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block"
  }

  searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
  });
});
