import timerTpl from './templates/timer.hbs';
import timerList from './timer.json';
import './styles.css';

const bodyRef = document.querySelector('.body');
// const buttonRef = document.querySelector('ul.button');

bodyRef.insertAdjacentHTML('afterbegin', timerTpl(timerList));
const timerRef = document.getElementById('#timer-1');

const CountdownTimer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      updateClockFace(deltaTime);
    }, 1000);
  },
};
CountdownTimer.start();
function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  // timerRef.
}
function pad(value) {
  return String(value).padStart(2, '0');
}
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

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
