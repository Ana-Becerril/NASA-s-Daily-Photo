import './style.css';
import home from "./home"

const parent = document.createElement('div');
parent.id = 'parent';
document.body.appendChild(parent)
parent.appendChild(home());


