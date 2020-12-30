import './styles.css';

const bodyRef = document.querySelector('.body');
const btnStart = document.querySelector('button[data-action=start]');
const btnStop = document.querySelector('button[data-action=stop]');

bodyRef.insertAdjacentHTML('afterbegin', timerTpl(timerList));
const daysRef = document.querySelector('[data-value=days]');
const hoursRef = document.querySelector('[data-value=hours]');
const minsRef = document.querySelector('[data-value=mins]');
const secsRef = document.querySelector('[data-value=secs]');

class CountdownTimer {
  constructor(newCountdownTimer) {
    this.selector = newCountdownTimer.selector;
    this.targetDate = newCountdownTimer.targetDate;
    this.intervalId = null;
    this.isActive = false;
  }
  count() {}

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    // const startTime = Date.now();
    updateClockFace(deltaTime);
    // console.log(startTime);
    // const targetDay = new Date('Jan 25, 2021');
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      updateClockFace(deltaTime);
    }, 1000);
  }

  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
    updateClockFace(0);
  }
}
btnStart.addEventListener('click', CountdownTimer.start);
// btnStop.addEventListener('click', CountdownTimer.stop.bind(CountdownTimer));
console.log(CountdownTimer);
console.dir(CountdownTimer);
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
const newCountdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
console.log(newCountdownTimer);
