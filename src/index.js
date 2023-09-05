import './styles.css';
import Icon from './images/pizza.jpeg'

const element = document.createElement('div');

function addImage() {
const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('imageHome');

    element.appendChild(myIcon);
    console.log(element)
return document.body.appendChild(element);
}

addImage()




async function getWeather(location) {
   


    try{
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=53333bca513f49888a303110233008&q='+location, {mode: 'cors'})

    const weatherData = await response.json();

        console.log(weatherData)

    
    }
    
    catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        }
  }

 

  async function getForecast(location) {
   


    try{
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=53333bca513f49888a303110233008&days=3&q='+location, {mode: 'cors'})

    const forecastData = await response.json();

    processData(forecastData)

    }
    
    catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        }
  }


  getWeather('london')
  getForecast('07701')

  function processData(forecastData) {

    let maxTempC = forecastData.forecast.forecastday[0].day.maxtemp_c
        let maxTempF = forecastData.forecast.forecastday[0].day.maxtemp_f
        let minTempC = forecastData.forecast.forecastday[0].day.mintemp_c
        let minTempF = forecastData.forecast.forecastday[0].day.mintemp_f
        let condition = forecastData.forecast.forecastday[0].day.condition.text
        let icon = forecastData.forecast.forecastday[0].day.condition.icon

        console.log(maxTempC)
        console.log(maxTempF)
        console.log(minTempC)
        console.log(minTempF)
        console.log(condition)
        console.log(icon)

        console.log(forecastData.forecast.forecastday[0].day)


  }


  /*get data from form*/

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    //let authorForm = data.author
    
    console.log(data.location)
    getForecast(data.location)

})