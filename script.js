const input = document.getElementById('input');
const button = document.getElementById('button');


const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const cityCondition = document.getElementById('city-condition');
const cityWind = document.getElementById('city-wind');
const lastUpdated = document.getElementById('last_updated');
const weatherIcon = document.getElementById('weather-icon');


async function getdata(cityName) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=d283c6020a26474fb8695753250411&q=${cityName}&aqi=yes`);

    return await promise.json();
};

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getdata(value);
    cityName.innerHTML = "City Name : " + `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerHTML = "Time : " + result.location.localtime;
    cityTemp.innerHTML = "Temperature : " + result.current.temp_c + "°C";
    cityCondition.innerHTML = "Conditions : " + result.current.condition.text;
    weatherIcon.src = "https:" + result.current.condition.icon;
    cityWind.innerHTML = "Wind : " + result.current.wind_kph + " " + "km/h";
    lastUpdated.innerHTML = "last updated : " + result.current.last_updated;

});