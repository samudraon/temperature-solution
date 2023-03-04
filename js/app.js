/* Do not show API KEY on your JS file */
const API_KEY = '1cc191d347e86fa6dd734de2fca166cb';

const loadTemperature = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(URL)
        .then(res => res.json())
        .then(data => showTemperature(data))
}

const showTemperature = (data) => {
    const temperature = document.getElementById('temperature');
    console.log(data.main.temp)
    temperature.innerText = data.main.temp;
}

loadTemperature('dhaka');