const cityInput = document.querySelector("#cityInput");
const weatherbox = document.querySelector('#weather-box');

cityInput.addEventListener(
    "keyup",
    async function (event) {
        if (event.key == "Enter") {
            const cityName = event.target.value;
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`;
            const response = await fetch(API);
            if (response.status == 200) {
                const data = await response.json();
                weatherbox.innerHTML = `
                <div class="w-full grid grid-cols-2 justify-center content-center">
                <img class="" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                <h2 class="text-2xl md:text-3xl capitalize grid grid-cols justify-center content-center font-semibold mb-2">${cityName}</h2>
                </div>
                <p class="text-lg md:text-xl mb-6">${data.weather[0].main}</p>
                <h3 class="text-3xl md:text-4xl mb-2">${data.main.temp} °C </h3>
                <div class="text-gray-300">
                    <p class="mb-2">Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} km/h</p>`

            } else if (response.status == 404) {
                    weatherbox.innerHTML =` <h2 class="text-2xl md:text-3xl capitalize grid grid-cols justify-center content-center font-semibold mb-2">City Not Found</h2>`

            }
        }
    }
)