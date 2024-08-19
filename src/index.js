let searchInputElement = document.querySelector("#search-form-input");
  let city = searchInputElement.value;
  let apiKey = "210c20d975f9b48064aeo63e6381fbt6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
