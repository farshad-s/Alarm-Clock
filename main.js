let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let addAlarmButton = document.getElementById("add-alarm-button");
let selectedHour = document.getElementById("add-hour");
let selectedMinute = document.getElementById("add-minute");
let displayAlarmTime = document.getElementById("alarm-set-time");
let disableAlarmButton = document.getElementById("disable-alarm");

const alarmSound = document.getElementById("alarm-sound");

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

function alarmSet() {
  addAlarmButton.addEventListener("click", function () {
    let alarmHour = selectedHour.options[selectedHour.selectedIndex].text;
    let alarmMinute = selectedMinute.options[selectedMinute.selectedIndex].text;
    let newAlarm = alarmHour + ":" + alarmMinute;
    displayAlarmTime.innerText = newAlarm;

    if (
      displayAlarmTime.innerText ==
      hours.innerText + ":" + minutes.innerText
    ) {
      alarmSound.play();

      setTimeout(function () {
        alarmSound.pause();
      }, 1000);
    }
  });
}

setInterval(updateTime, 1000);
alarmSet();
