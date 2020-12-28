import timerTpl from './templates/timer.hbs';
import timerList from './timer.json';
import './styles.css';

const bodyRef = document.querySelector('.body');
const btnStart = document.querySelector('button[data-action=start]');
const btnStop = document.querySelector('button[data-action=stop]');

bodyRef.insertAdjacentHTML('afterbegin', timerTpl(timerList));
const daysRef = document.querySelector('[data-value=days]');
const hoursRef = document.querySelector('[data-value=hours]');
const minsRef = document.querySelector('[data-value=mins]');
const secsRef = document.querySelector('[data-value=secs]');

const CountdownTimer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    // console.log(startTime);
    const targetDay = new Date('Jan 1, 2021');
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDay - currentTime;
      updateClockFace(deltaTime);
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
    updateClockFace(0);
  },
};
btnStart.addEventListener('click', CountdownTimer.start.bind(CountdownTimer));
btnStop.addEventListener('click', CountdownTimer.stop.bind(CountdownTimer));

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minsRef.textContent = mins;
  secsRef.textContent = secs;
}
function pad(value) {
  return String(value).padStart(2, '0');
}
