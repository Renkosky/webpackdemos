import './style.css'
import _ from 'lodash';
import icon from './icon.jpg'
import Data from './data.xml';
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  var myIcon = new Image();
  myIcon.src = icon;
  element.appendChild(myIcon);
  console.log(Data);
  return element;
}

document.body.appendChild(component());