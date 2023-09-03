import './styles.css';
import Icon from './images/pizza.jpeg'

const element = document.createElement('div');

function addImage() {
const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('imageHome');

    element.appendChild(myIcon);
return element
}

addImage()

console.log('hello')