let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let today = new Date();

function updateTime() {
  hours.innerText = today.getHours();
  minutes.innerText = today.getMinutes();
  seconds.innerText = today.getSeconds();
}

function addZeroToMinutes() {
  if (minutes.innerText < 10) {
    minutes.innerText = "0" + minutes.innerText;
  }
}

updateTime();
addZeroToMinutes();
