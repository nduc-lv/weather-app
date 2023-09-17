import getWeatherInfo from "./core/weather-api";
import {displayData, displayError} from "./front/render-html";
async function display(location){
    const info = await getWeatherInfo(location);
    console.log(location);
    if (info.hasOwnProperty("error")){
        displayError(info.error.message);
    }
    else{
        displayData(info);
    }
}
function getLocation(){
    const input = document.querySelector("input");
    const location = input.value;
    return location;
}
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const location = getLocation();
    display(location);
    console.log(location);
})