function weatherDisplay(weatherData) {

    const removeDiv = document.createElement('div');
    removeDiv.id = 'remove';

    const town = document.createElement('h1');
    town.textContent = weatherData.locationName

    const state = document.createElement('h1');
    state.textContent = weatherData.locationState

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
        image.classList.add('WeatherPictures');

        //forecast
        const forecastText = document.createElement('p');
        forecastText.textContent = forecast

        //max temp
        const maxTempText = document.createElement('p');
        maxTempText.textContent = maxTemp

        //min temp
        const minTempText = document.createElement('p');
        minTempText.textContent = minTemp




        /*append elements*/
        weatherContainer.appendChild(weather1);
        weather1.appendChild(day)
        weather1.appendChild(image)
        weather1.appendChild(forecastText)
        weather1.appendChild(maxTempText)
        weather1.appendChild(minTempText)

    }

    createWeatherDiv(weatherData[0].maxTempF, weatherData[0].minTempF, weatherData[0].condition, weatherData[0].weekDay, weatherData[0].iconJoin)


    removeDiv.appendChild(town);
    removeDiv.appendChild(state);
    removeDiv.appendChild(weatherContainer)

   


    return document.body.appendChild(removeDiv);






}






export default weatherDisplay;