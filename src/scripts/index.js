import './style.css';
import home from "./home"
import homeImage from './home-image.jpg';


const parent = document.createElement('div');
parent.id = 'parent';
document.body.appendChild(parent)
parent.appendChild(home());

