let time = document.getElementById('time');

function getCurrentTime() {
    const date = new Date();
    hours = (date.getHours());
    minutes = formatTime(date.getMinutes());
    format = (hours < 12) || (hours == 24) ? 'AM' : 'PM';
    formatHours = formatTime((hours + 11) % 12 + 1);
    time.innerHTML = `${formatHours}:${minutes} ${format}`;
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value
}

setInterval(getCurrentTime, 1000);

window.addEventListener('load', () => {
    let lon
    let lat

    let tempValue = document.getElementById('tempValue')
    let animIcon = document.getElementById('animIcon')

    let tempDesc = document.getElementById('tempDesc')
    let location = document.getElementById('location')

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
            
            lon = position.coords.longitude
            lat = position.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b2bc87301c50ac91ddac754bdeb3160c`

            fetch(url)
                .then( response => { return response.json() })
                .then( data => {
                    let temp = Math.round(data.main.temp - 273.15)
                    tempValue.textContent = `${temp}° C`

                    console.log(data)
                    tempDesc.textContent = data.weather[0].main

                    location.textContent = `${data.name}, ${data.sys.country}`

                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            animIcon.src = 'animated/thunder.svg'
                            break;
                        case 'Drizzle':
                            animIcon.src = 'animated/rainy-2.svg'
                            break;
                        case 'Rain':
                            animIcon.src = 'animated/rainy-7.svg'
                            break;
                        case 'Snow':
                            animIcon.src = 'animated/snowy-6.svg'
                            break;
                        case 'Clear':
                            animIcon.src = 'animated/day.svg'
                            break;
                        case 'Atmosphere':
                            animIcon.src = 'animated/weather.svg'
                            break;
                        case 'Clouds':
                            animIcon.src = 'animated/cloudy-day-1.svg'
                            break;
                        default:
                            animIcon.src = 'animated/cloudy-day-1.svg'
                            break;
                    }

                })
                .catch( error => {
                    console.log(error)
                })
        })
    }
})