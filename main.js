let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let button = document.getElementById("add-alarm-button");
let selectedHour = document.getElementById("add-hour");
let selectedMinute = document.getElementById("add-minute");

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

function setAlarm() {
  let alarmHour, alarmMinute;
  let setAlarmTime = button.addEventListener("click", function () {
    alarmHour = selectedHour.options[selectedHour.selectedIndex].text;
    alarmMinute = selectedMinute.options[selectedMinute.selectedIndex].text;
  });
}

setInterval(updateTime, 1000);
setAlarm();
