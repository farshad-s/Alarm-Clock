let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let button = document.getElementById("add-alarm-button");
let selectedHour = document.getElementById("add-hour");
let selectedMinute = document.getElementById("add-minute");
let displayAlarmTime = document.getElementById("alarm-set-time");

// const alarmSound = new Audio("Alarm-ringtone.mp3");

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

  setInterval(updateTime, 1000);
}

function setAlarm() {
  updateTime();

  button.addEventListener("click", function () {
    let alarmHour = selectedHour.options[selectedHour.selectedIndex].text;
    let alarmMinute = selectedMinute.options[selectedMinute.selectedIndex].text;
    let newAlarm = alarmHour + ":" + alarmMinute;
    displayAlarmTime.innerText = newAlarm;
    console.log(displayAlarmTime.innerText);
  });
}

updateTime();
setAlarm();
