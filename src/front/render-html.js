// RENDER THE DATA
function displayData(weatherData){
    const display = document.querySelector('.display-weather');
    const error = document.querySelector('.error');
    const temp = document.querySelector("#temp");
    const humidity = document.querySelector("#humidity");
    const wind = document.querySelector("#wind");
    const condition = document.querySelector("#condition");
    const location = document.querySelector("#location");

    error.textContent = '';
    display.style.display = "block";
    temp.textContent = weatherData.temp;
    humidity.textContent = weatherData.humidity;
    wind.textContent = weatherData.wind;
    condition.textContent = weatherData.condition;
    location.textContent = weatherData.location;
}
function displayError(errorMessage){
    const display = document.querySelector('.display-weather');
    display.style.display = "none";
    const error = document.querySelector(".error");
    error.textContent = errorMessage;
}
export {displayData, displayError};