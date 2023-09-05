import './styles.css';
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

    let maxTempC = forecastData.forecast.forecastday[0].day.maxtemp_c
        let maxTempF = forecastData.forecast.forecastday[0].day.maxtemp_f
        let minTempC = forecastData.forecast.forecastday[0].day.mintemp_c
        let minTempF = forecastData.forecast.forecastday[0].day.mintemp_f
        let condition = forecastData.forecast.forecastday[0].day.condition.text
        let icon = forecastData.forecast.forecastday[0].day.condition.icon
        let locationName = forecastData.location.name
        let locationState = forecastData.location.region 
    
     
   let data =   { maxTempC, maxTempF, minTempC, minTempF, condition, icon, locationName, locationState }
  console.log(data)
  
  }




  /*get data from form*/

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    //let authorForm = data.author
    
    console.log(data.location)
   getForecast(data.location)

})