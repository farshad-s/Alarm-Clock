let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let addAlarmButton = document.getElementById("add-alarm-button");
let selectedHour = document.getElementById("add-hour");
let selectedMinute = document.getElementById("add-minute");
let displayAlarmTime = document.getElementById("alarm-set-time");
let disableAlarmButton = document.getElementById("disable-alarm");

let addHour = document.getElementById("add-hour");
let addMinute = document.getElementById("add-minute");

const alarmSound = document.getElementById("alarm-sound");

function updateTime() {
  // Gets the current hour, minute, and second
  let today = new Date();
  hours.innerText = today.getHours();
  minutes.innerText = today.getMinutes();
  seconds.innerText = today.getSeconds();

  // adds a 0 to minute if less than 10
  if (minutes.innerText < 10) {
    minutes.innerText = "0" + minutes.innerText;
  }
  // adds a 0 to second if less than 10
  if (seconds.innerText < 10) {
    seconds.innerText = "0" + seconds.innerText;
  }
}

function alarmSet() {
  addAlarmButton.addEventListener("click", function () {
    // When button is clicked hour equals selected hour, minute equals selected minute from dropdown menu
    let alarmHour = selectedHour.options[selectedHour.selectedIndex].text;
    let alarmMinute = selectedMinute.options[selectedMinute.selectedIndex].text;
    // the selected alarm time is displayed
    displayAlarmTime.innerText = alarmHour + ":" + alarmMinute;
  });
}

function playAlarm() {
  // if the selected alarm and the current time match the alarm plays
  if (displayAlarmTime.innerText == hours.innerText + ":" + minutes.innerText) {
    alarmSound.play();
    // alarm stops playing after 60 seconds
    setTimeout(function () {
      alarmSound.pause();
    }, 60000);
  }
}

function disableAlarm() {
  disableAlarmButton.addEventListener("click", function () {
    // When button is clicked Alarm Disabled is displayed, Alarm sound is paused
    displayAlarmTime.innerText = "Alarm Disabled";
    alarmSound.pause();
  });
}

function addToHourDropdown() {
  for (let i = 1; i <= 24; i++) {
    let option = document.createElement("option");
    option.text = i;
    if (option.text < 10) {
      option.text = "0" + option.text;
    }
    addHour.add(option);
  }
}

setInterval(updateTime, 1000);
alarmSet();
setInterval(playAlarm, 1000);
disableAlarm();
addToHourDropdown();
