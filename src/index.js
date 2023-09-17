import getWeatherInfo from "./core/weather-api";
import {displayData, displayError} from "./front/render-html";
async function display(location){
    const info = await getWeatherInfo(location);
    if (info.hasOwnProperty("error")){
        displayError(info.error.message);
    }
    else{
        displayData(info);
    }
}