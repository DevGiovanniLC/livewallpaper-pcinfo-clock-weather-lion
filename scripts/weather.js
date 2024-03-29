
const apiKey = "71aceab699be8a3aa551248defd66422";
const city = "Las Palmas de Gran Canaria"
const lon=-15.439
const lat = 28.1165
const units = "metric"
const language = "es"

var weatherID = setInterval(getWeather, 30000);
getWeather()

function getWeather() {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${language}`)
		.then((response) => response.json())
		.then((data) => {
			const weatherInfo = document.getElementById("weather-info")
			if (data.cod === 200) {
				const temperature = data.main.temp
				const description = data.weather[0].description
				const icon = data.weather[0].icon

				weatherInfo.innerHTML= `
				<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
            <p>${String(temperature).substring(0,2)}°C</p>
            <p>${description}</p>
            `
			} else {
				
			}
		})
		.catch((error) => {
			console.error("Error fetching weather data:", error);
		});
}
