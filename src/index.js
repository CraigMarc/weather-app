import './styles.css';

import { weatherDisplay, errorDisplay } from "./dom";


//import Icon from './images/pizza.jpeg'
/*
const element = document.createElement('div');

function addImage() {
const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('imageHome');

    element.appendChild(myIcon);
   
return document.body.appendChild(element);
}

addImage()

*/

 

  async function getForecast(location, unit) {
   


    try{
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=53333bca513f49888a303110233008&days=3&q='+location, {mode: 'cors'})

    const forecastData = await response.json();

  //processData(forecastData)
      return  processData(forecastData, unit)
    }
    
    catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      //add error message to dom
      errorDisplay()
        }
  }


  
  getForecast('07701', 'f')

  function processData(forecastData, unit) {

   
    
    function returnData(day) {

      const weekdayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      //console.log(forecastData)
    let maxTempC = forecastData.forecast.forecastday[day].day.maxtemp_c
        let maxTempF = forecastData.forecast.forecastday[day].day.maxtemp_f
        let minTempC = forecastData.forecast.forecastday[day].day.mintemp_c
        let minTempF = forecastData.forecast.forecastday[day].day.mintemp_f
        let condition = forecastData.forecast.forecastday[day].day.condition.text
        let icon = forecastData.forecast.forecastday[day].day.condition.icon
        let locationName = forecastData.location.name
        let locationState = forecastData.location.region 
        let date = forecastData.forecast.forecastday[day].date
       console.log(date)
      let dt = new Date(date);
    
     console.log(dt)
      let weekDay = weekdayArr[dt.getUTCDay()];
     
     
        return { maxTempC, maxTempF, minTempC, minTempF, condition, icon, locationName, locationState, weekDay }
    }
    function dataArray() {
      let weatherArray = []
      for (let i = 0; i < 3; i++) {
        weatherArray.push(returnData(i))
          
      }
      return weatherArray
    }

    weatherDisplay(dataArray(), unit)
     
  
  
  }




  /*get data from form*/

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
   
    const remove = document.getElementById("remove");
    remove.remove()
    
   getForecast(data.location, data.unit)
   document.getElementById("form").reset()
})