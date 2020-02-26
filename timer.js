// https://www.geeksforgeeks.org/create-countdown-timer-using-javascript/

const demo = document.querySelector("#demo");
const daySpan = document.querySelector("#day");
const hourSpan = document.querySelector("#hour");
const minuteSpan = document.querySelector("#minute");
const secondSpan = document.querySelector("#second");

var deadline = new Date("April 23, 2020 00:00:00").getTime();

var x = setInterval(createCountDown, 1000);

function createCountDown() {
  var now = new Date().getTime();
  var diff = deadline - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daySpan.innerHTML = days;
  hourSpan.innerHTML = hours;
  minuteSpan.innerHTML = minutes;
  secondSpan.innerHTML = seconds;
  if (diff < 0) {
    clearInterval(x);
    demo.innerHTML = "TIME UP";
    daySpan.innerHTML = "0";
    hourSpan.innerHTML = "0";
    minuteSpan.innerHTML = "0";
    secondSpan.innerHTML = "0";
  }
}
