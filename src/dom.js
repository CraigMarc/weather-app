function weatherDisplay(weatherData, unit) {

    const removeDiv = document.createElement('div');
    removeDiv.id = 'remove';

    const town = document.createElement('h1');
    town.textContent = weatherData[0].locationName

    const state = document.createElement('h1');
    state.textContent = weatherData[0].locationState

    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('weatherContainer');

    function createWeatherDiv(maxTemp, minTemp, forecast, weekDay, imageFile) {
        /*menu div*/

        const weather1 = document.createElement('div');
        weather1.classList.add('weatherItem');

        //day
        const day = document.createElement('h2');
        day.textContent = weekDay

        /*weather pic*/
        const image = new Image();
        image.src = imageFile;
        image.classList.add('weatherPictures');

        //forecast
        const forecastText = document.createElement('p');
        forecastText.textContent = forecast
        forecastText.classList.add('forecast');

        //max temp
        const maxTempText = document.createElement('p');
        maxTempText.textContent = "Max Temp: "+ maxTemp

        //min temp
        const minTempText = document.createElement('p');
        minTempText.textContent = "Min Temp: " + minTemp




        /*append elements*/
        weatherContainer.appendChild(weather1);
        weather1.appendChild(day)
        weather1.appendChild(image)
        weather1.appendChild(forecastText)
        weather1.appendChild(maxTempText)
        weather1.appendChild(minTempText)

    }
   
    if (unit == 'f'){
    createWeatherDiv(weatherData[0].maxTempF, weatherData[0].minTempF, weatherData[0].condition, weatherData[0].weekDay, weatherData[0].icon)
    createWeatherDiv(weatherData[1].maxTempF, weatherData[1].minTempF, weatherData[1].condition, weatherData[1].weekDay, weatherData[1].icon)
    createWeatherDiv(weatherData[2].maxTempF, weatherData[2].minTempF, weatherData[2].condition, weatherData[2].weekDay, weatherData[2].icon)
    }
   if (unit == 'c') {
        createWeatherDiv(weatherData[0].maxTempC, weatherData[0].minTempC, weatherData[0].condition, weatherData[0].weekDay, weatherData[0].icon)
        createWeatherDiv(weatherData[1].maxTempC, weatherData[1].minTempC, weatherData[1].condition, weatherData[1].weekDay, weatherData[1].icon)
        createWeatherDiv(weatherData[2].maxTempC, weatherData[2].minTempC, weatherData[2].condition, weatherData[2].weekDay, weatherData[2].icon)
   }

    removeDiv.appendChild(town);
    removeDiv.appendChild(state);
    removeDiv.appendChild(weatherContainer)

   


    return document.body.appendChild(removeDiv);






}

function errorDisplay() {

    const removeDiv = document.createElement('div');
    removeDiv.id = 'remove';

    const error = document.createElement('h2');

        error.textContent = 'Location Not Found'

        removeDiv.appendChild(error)

        return document.body.appendChild(removeDiv);

}


export {
    weatherDisplay,
    errorDisplay
}



