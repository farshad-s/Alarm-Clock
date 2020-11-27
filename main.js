let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function updateTime() {
  let today = new Date();

  hours.innerText = today.getHours();
  minutes.innerText = today.getMinutes();
  seconds.innerText = today.getSeconds();

  if (minutes.innerText < 10) {
    minutes.innerText = "0" + minutes.innerText;
  }

  if (seconds.innerText < 10) {
    seconds.innerText = "0" + seconds.innerText;
  }
}

setInterval(updateTime, 1000);
