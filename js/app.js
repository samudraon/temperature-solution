/* Do not show API KEY on your JS file */
const API_KEY = '1cc191d347e86fa6dd734de2fca166cb';

const loadTemperature = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(URL)
        .then(res => res.json())
        .then(data => showTemperature(data))
}

const showTemperature = (data) => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main)
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const inputField = document.getElementById('city-name');
    const city = inputField.value;
    loadTemperature(city);
    // set city
    document.getElementById('city').innerText = city;
})

loadTemperature('dhaka');