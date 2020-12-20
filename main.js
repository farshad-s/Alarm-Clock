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
  minutes.innerText < 10 ? (minutes.innerText = "0" + minutes.innerText) : "";
  // adds a 0 to second if less than 10
  seconds.innerText < 10 ? (seconds.innerText = "0" + seconds.innerText) : "";
}

function alarmSet() {
  addAlarmButton.addEventListener("click", function () {
    // When button is clicked hour equals selected hour, minute equals selected minute from dropdown menu
    let alarmHour = selectedHour.options[selectedHour.selectedIndex];
    let alarmMinute = selectedMinute.options[selectedMinute.selectedIndex];
    // if add alarm is clicked whilst the option is Select Hour or Select Minute, it will return Time Not Selected
    // otherwise the selected alarm time is displayed
    alarmHour.value == "" || alarmMinute.value == ""
      ? (displayAlarmTime.innerText = "Time not selected")
      : (displayAlarmTime.innerText = alarmHour.text + ":" + alarmMinute.text);
  });
}

function playAlarm() {
  // if the selected alarm and the current time match the alarm plays
  // alarm stops playing after 60 seconds
  displayAlarmTime.innerText == hours.innerText + ":" + minutes.innerText
    ? alarmSound.play()
    : setTimeout(function () {
        alarmSound.pause();
      }, 60000);
}

function disableAlarm() {
  disableAlarmButton.addEventListener("click", function () {
    // When button is clicked Alarm Disabled is displayed, Alarm sound is paused
    displayAlarmTime.innerText = "Alarm Disabled";
    alarmSound.pause();
  });
}

// adds the dropdown options for the 24 hours
function addToHourDropdown() {
  for (let hour = 1; hour <= 24; hour++) {
    let option = document.createElement("option");
    option.text = hour;
    if (option.text < 10) {
      option.text = "0" + option.text;
    }
    addHour.add(option);
  }
}

// adds the dropdown options for the 60 minutes
function addToMinuteDropdown() {
  for (let minute = 0; minute <= 59; minute++) {
    let option = document.createElement("option");
    option.text = minute;
    if (option.text < 10) {
      option.text = "0" + option.text;
    }
    addMinute.add(option);
  }
}

setInterval(updateTime, 1000);
alarmSet();
setInterval(playAlarm, 1000);
disableAlarm();
addToHourDropdown();
addToMinuteDropdown();
