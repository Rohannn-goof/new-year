const music = document.getElementById("bgMusic");

// play music on first user interaction
document.addEventListener("click", () => {
  if (music.paused) {
    music.volume = 0.6;
    music.play().catch(() => {});
  }
}, { once: true });
document.getElementById("next").addEventListener("click", () => {
  const music = document.getElementById("bgMusic");

  music.pause();
  music.currentTime = 0;

  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s ease";

  setTimeout(() => {
    window.location.href = "../page6-april/index.html";
  }, 1000);
});

