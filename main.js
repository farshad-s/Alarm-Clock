let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let today = new Date();

function updateTime() {
  hours.innerText = today.getHours();
}

updateTime();
