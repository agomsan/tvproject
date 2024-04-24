const tvScreen = document.querySelector(".tv-screen");
const powerSwitch = document.getElementById("power-switch");
const volumeSwitch = document.getElementById("volume-switch");

let isTvOn = true;
let currentVolume = 50;

function togglePower() {
  isTvOn = !isTvOn;
  tvScreen.textContent = isTvOn ? "ON" : "OFF";
}

function setVolume() {
  currentVolume = volumeSlider.value;
}

powerSwitch.addEventListener("click", togglePower);
volumeSwitch.addEventListener("input", setVolume);
