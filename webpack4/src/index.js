import _ from 'lodash';
import './style.css';
import curry from './curry.jpg';
import print from './print';
function component() {
    let div = document.createElement('div');
    let btn = document.createElement('button');
    btn.innerHTML = 'print';
    btn.onclick = print;
    div.innerHTML = 'curry';
    div.classList.add('hello');
    let img = new Image();
    img.src = curry;
    img.style.width = '140px';
    div.appendChild(img);
    div.appendChild(btn);
    return div;
}
document.body.appendChild(component());
