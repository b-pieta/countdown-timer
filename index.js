const countdown = () => {
  const countDate = new Date("May 21, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // Set the time in milliseconds
  const timeUnits = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
    second: 1000
  };

  // Calculate the actual time using destructuring
  const { day, hour, minute, second } = timeUnits;
  const textDay = Math.floor(gap / day);
  let { hours: textHours, mins: textMinutes, secs: textSeconds } = {
    hours: Math.floor((gap % day) / hour),
    mins: Math.floor((gap % hour) / minute),
    secs: Math.floor((gap % minute) / second)
  };

  // Pad hours, minutes & seconds with zeros in the beginning if < 10
  [textHours, textMinutes, textSeconds] = [textHours, textMinutes, textSeconds].map(unit => {
    return unit < 10 ? `0${unit}` : unit;
  });

  // Update the time elements in HTML using template literals
  document.querySelector(".days").textContent = textDay;
  document.querySelector(".hours").textContent = textHours;
  document.querySelector(".mins").textContent = textMinutes;
  document.querySelector(".secs").textContent = textSeconds;
};


// update after one sec
setInterval(countdown, 1000);

//light mode section

const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', function() {
  console.log('click')
  const body = document.body;
  const h1 = document.querySelector('h1');
  
  // Toggle the background color of the body to none or original value
  if (body.style.background === 'papayawhip') {
    body.style.background = '';
    h1.style.color = ''; 
  } else {
    body.style.background = 'papayawhip';
    h1.style.color = '#f76b8e'; 
  }
});
