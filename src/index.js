import './styles.css';
import weatherDisplay from './dom';
import Icon from './images/pizza.jpeg'

const element = document.createElement('div');

function addImage() {
const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('imageHome');

    element.appendChild(myIcon);
   
return document.body.appendChild(element);
}

addImage()



 

  async function getForecast(location) {
   


    try{
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=53333bca513f49888a303110233008&days=3&q='+location, {mode: 'cors'})

    const forecastData = await response.json();

  //processData(forecastData)
      return  processData(forecastData)
    }
    
    catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        }
  }


  
  getForecast('07701')

  function processData(forecastData) {

   
    
    function returnData(day) {

    let maxTempC = forecastData.forecast.forecastday[day].day.maxtemp_c
        let maxTempF = forecastData.forecast.forecastday[day].day.maxtemp_f
        let minTempC = forecastData.forecast.forecastday[day].day.mintemp_c
        let minTempF = forecastData.forecast.forecastday[day].day.mintemp_f
        let condition = forecastData.forecast.forecastday[day].day.condition.text
        let icon = forecastData.forecast.forecastday[day].day.condition.icon
        let locationName = forecastData.location.name
        let locationState = forecastData.location.region 
      let array = icon.split("")
      array.splice(0, 2)
      let iconJoin = array.join('')
     
        return { maxTempC, maxTempF, minTempC, minTempF, condition, iconJoin, locationName, locationState }
    }
    function dataArray() {
      let weatherArray = []
      for (let i = 0; i < 3; i++) {
        weatherArray.push(returnData(i))
          
      }
      return weatherArray
    }

    weatherDisplay(dataArray())


  //console.log(dataArray())
     
  
  
  }




  /*get data from form*/

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    //let authorForm = data.author
    
    
   getForecast(data.location)

})