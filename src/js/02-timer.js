import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';
import Notiflix from 'notiflix';

const calendarInput = document.querySelector('#datetime-picker');
const alert = document.querySelector('.alert');
const btnStartRef = document.querySelector('[data-start]');
const secondsLabel = document.querySelector('[data-seconds]');
const minutesLabel = document.querySelector('[data-minutes]');
const hoursLabel = document.querySelector('[data-hours]');
const daysLabel = document.querySelector('[data-days]');

btnStartRef.disabled = true; 

let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    const date = Date.now();
    if(selectedDates[0] - date < 0){
        Notiflix.Notify.failure('Please choose a date in the future',
        {
          timeout: 2000,
        });
        btnStartRef.disabled = true;
        return;
    }
    btnStartRef.disabled = false;
  },
};

const calendarTimer = flatpickr('#datetime-picker', options);

btnStartRef.addEventListener('click', () => {
    intervalId = setInterval(onSetInterval, 1000);
    calendarInput.disabled = true;
    btnStartRef.disabled = true;
});

function onSetInterval() {
    const date = Date.now();
    let {seconds, minutes, hours, days} = convertMs(calendarTimer.selectedDates[0] - date);
    if(calendarTimer.selectedDates[0] - date <= 0){
      clearInterval(intervalId);
      return;
    }
    secondsLabel.textContent = String(seconds).padStart(2, '0');
    minutesLabel.textContent = String(minutes).padStart(2, '0');
    hoursLabel.textContent = String(hours).padStart(2, '0');
    daysLabel.textContent = String(days).padStart(2, '0');
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};