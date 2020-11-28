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

  if (today.getHours() < 10) {
    currentTime.innerText = "0" + currentTime.innerText;
  }

  if (today.getMinutes() < 10) {
    currentTime.innerText =
      today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds();
  }
  if (today.getSeconds() < 10) {
    currentTime.innerText =
      today.getHours() + ":" + today.getMinutes() + ":0" + today.getSeconds();
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
