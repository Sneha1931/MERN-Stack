document.getElementById('weather-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const city = document.getElementById('city-input').value;
  getWeather(city);
});

function getWeather(city) {
  const apiKey = '99fc5926e43087584ac211b09c701d5d';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert('City not found');
        return;
      }

      const cityName = data.name;
      const temperatureCelsius = data.main.temp;
      const description = data.weather[0].description;
      const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      document.getElementById('city-name').textContent = cityName;
      document.getElementById('description').textContent = `Weather: ${description}`;
      document.getElementById('icon').src = icon;

      const unitToggle = document.getElementById('unit-toggle');
      unitToggle.addEventListener('change', function() {
        const selectedUnit = unitToggle.value;
        if (selectedUnit === 'celsius') {
          document.getElementById('temperature').textContent = `Temperature: ${temperatureCelsius}°C`;
        } else if (selectedUnit === 'fahrenheit') {
          const temperatureFahrenheit = convertToFahrenheit(temperatureCelsius);
          document.getElementById('temperature').textContent = `Temperature: ${temperatureFahrenheit}°F`;
        }
      });

      // Display the weather information section
      document.getElementById('weather-info').style.display = 'block';
    })
    .catch(error => {
      console.error('Error fetching the weather data', error);
    });
}

function convertToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
