const targetDate = new Date("January 1, 2026 00:00:01").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const btn = document.getElementById("startBtn");
const tease = document.getElementById("tease");
const music = document.getElementById("bgMusic");

let musicStarted = false;

// COUNTDOWN
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  daysEl.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  hoursEl.textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutesEl.textContent = Math.floor((diff / (1000 * 60)) % 60);
  secondsEl.textContent = Math.floor((diff / 1000) % 60);
}, 1000);

// BUTTON CLICK
btn.addEventListener("click", () => {
  if (!musicStarted) {
    music.volume = 0.3;
    music.play();
    musicStarted = true;
  }

  const now = new Date().getTime();
  if (now < targetDate) {
    tease.textContent = "Be patient, darling 🤍";
    tease.style.opacity = 1;
  } else {
    window.location.href = "../page2-entry/index.html";
  }
});