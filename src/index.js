function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-form-input");
    let city = searchInputElement.value;
    let apiKey = "210c20d975f9b48064aeo63e6381fbt6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
    console.log(response);
    console.log(response.data.temperature.current);
  
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.temperature.current);
    temperatureElement.innerHTML = temperature;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
  }
  