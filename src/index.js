import getWeatherInfo from "./core/weather-api";
async function displayInfo(){
    const info = await getWeatherInfo("Ha noi");
    if (info.hasOwnProperty("error")){
        console.log(info.error.message);
    }
    else{
        console.log(info);
    }
}
displayInfo();