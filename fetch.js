// using fetch api for getting weather information

const apiKey = "9f22d97df8ed6b96a7d6fa94570cb82b";
const city = "Pune";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
