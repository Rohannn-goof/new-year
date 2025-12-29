const music = document.getElementById("bgMusic");
const btn = document.getElementById("enterBtn");

let started = false;

btn.addEventListener("click", () => {
  if (!started) {
    music.volume = 0.35;
    music.play();
    started = true;
  }

  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.2s ease";

  setTimeout(() => {
    window.location.href = "../page3-january/index.html";
  }, 1200);
});