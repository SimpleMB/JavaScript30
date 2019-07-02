const timeLeftDisplay = document.querySelector('.display__time-left');
const timeEndDisplay = document.querySelector('.display__end-time');
const timeButtons = document.querySelectorAll('.timer__button');
const timeInput = document.querySelector('#custom');

let interval;

const timer = function (seconds) {
  if (interval) clearInterval(interval); 
  const  now = Date.now();
  const then = now + seconds * 1000;
  const timeEnd = new Date(then);
  timeEndDisplay.textContent = `${timeEnd.getHours()}:${timeEnd.getMinutes() < 10 ? '0'+timeEnd.getMinutes() : timeEnd.getMinutes()}`;
  displayTimeLeft(seconds);

  interval = setInterval(() => {
    secondsLeft = Math.round((then - Date.now())/1000);
    if (secondsLeft < 0) {
      clearInterval(interval);
      return
    }
    displayTimeLeft(secondsLeft);
  }, 1000)
}

const displayTimeLeft = function (seconds) {
  // console.log(seconds);
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60);
  const timeLeft = `${min < 10 ? ('0' + min) : min}:${sec < 10 ? ('0' + sec): sec}`;
  timeLeftDisplay.textContent = timeLeft;
}

timeButtons.forEach(control => control.addEventListener('click', () => timer(control.dataset.time)))
timeInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const time = Number(e.target[0].value);
  timer(time);
}
  )