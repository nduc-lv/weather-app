// GET WEATHER INFORMATION
const apiKey = '3443a28b025f413ca8d33549231609';
// return weather information based on location
async function getResponse(location){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    return response;
}
async function getWeatherInfo(location){
    const response = await getResponse(location);
    const info = await response.json();
    if (!info.hasOwnProperty("error")){
        const usefulInfo = {
            "temp": info.current.temp_c,
            "humidity": info.current.humidity,
            "wind": info.current.wind_kph,
            "condition": info.current.condition.text,
            "location": info.location.name,
            "icon": info.current.condition.icon,
        }
        return usefulInfo;
    }
    return info;
}

export default getWeatherInfo;
