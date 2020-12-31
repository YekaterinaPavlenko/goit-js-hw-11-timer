// import timerTpl from './templates/timer.hbs';
// import timerList from './timer.json';
import './styles.css';

const bodyRef = document.querySelector('.body');
const btnStart = document.querySelector('button[data-action=start]');
const btnStop = document.querySelector('button[data-action=stop]');

const daysRef = document.querySelector('[data-value=days]');
const hoursRef = document.querySelector('[data-value=hours]');
const minsRef = document.querySelector('[data-value=mins]');
const secsRef = document.querySelector('[data-value=secs]');

class CountdownTimer {
  constructor(object) {
    this.intervalId;
    this.isActive = false;
    this.deltaTime;
    this.targetDate = object.targetDate;
    this.selector = object.selector;
    console.log(this.deltaTime);
    console.log(this.targetDate);
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    updateClockFace(this.deltaTime);
    // console.log(startTime);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      // console.log(this.targetDate);
      if (currentTime > this.targetDate) {
        this.deltaTime = currentTime - this.targetDate;
      } else if (currentTime < this.targetDate) {
        this.deltaTime = this.targetDate - currentTime;
      }

      updateClockFace(this.deltaTime);
      console.log(this.deltaTime);
    }, 1000);
    // console.log(this.deltaTime);
  }
  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
    updateClockFace(0);
  }
  // console.log(startTime);
}
let timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
btnStart.addEventListener('click', () => {
  timer.start();
});
btnStop.addEventListener('click', () => {
  timer.stop();
});
console.log(btnStart);

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
timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 25, 2021'),
});
