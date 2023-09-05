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

console.log('hello')


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

  getWeather('london')

  async function getForecast(location) {
   


    try{
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=53333bca513f49888a303110233008&days=3&q='+location, {mode: 'cors'})

    const forcastData = await response.json();

        console.log(forcastData)

    
    }
    
    catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        }
  }

  getForecast('07701')