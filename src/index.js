import timerTpl from './templates/timer.hbs';
import timerList from './timer.json';
import './styles.css';

const bodyRef = document.querySelector('.body');
// const buttonRef = document.querySelector('ul.button');

bodyRef.insertAdjacentHTML('beforeend', timerTpl(timerListJgznm));

// const buttonStartRef = document.querySelector('button.start');
// const buttonStopRef = document.querySelector('button.stop');

// buttonStartRef.addEventListener('click', changeColor);
// buttonStopRef.addEventListener('click', stopChangeColor);

// let changeColorWithInterval = null;
// function changeColor(event) {
//   event.preventDefault();
//   buttonStartRef.setAttribute('disabled', true);
//   const randomColor = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
//   changeColorWithInterval = setInterval(() => {
//     randomColor(0, 5);
//     bodyRef.style.backgroundColor = colors[randomColor(0, 5)];
//     // console.log(colors[randomColor(0, 5)]);
//   }, 1000);
// }

// function stopChangeColor(event) {
//   buttonStartRef.removeAttribute('disabled', true);
//   event.preventDefault();
//   clearInterval(changeColorWithInterval);
// }
