const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const watch = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;


  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
})