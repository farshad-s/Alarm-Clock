let currentTime = document.getElementById("current-time");
let button = document.getElementById("add-alarm-button");
let selectedHour = document.getElementById("add-hour");
let selectedMinute = document.getElementById("add-minute");
let displayAlarmTime = document.getElementById("alarm-set-time");

// const alarmSound = new Audio("Alarm-ringtone.mp3");

function updateTime() {
  let today = new Date();
  currentTime.innerText =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  if (minutes.innerText < 10) {
    minutes.innerText = "0" + minutes.innerText;
  }

  if (seconds.innerText < 10) {
    seconds.innerText = "0" + seconds.innerText;
  }
}

button.addEventListener("click", function () {
  let alarmHour = selectedHour.options[selectedHour.selectedIndex].text;
  let alarmMinute = selectedMinute.options[selectedMinute.selectedIndex].text;
  let newAlarm = alarmHour + ":" + alarmMinute;
  displayAlarmTime.innerText = newAlarm;
  console.log(displayAlarmTime.innerText);
  console.log(newAlarm);
});

setInterval(updateTime, 1000);
