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
    window.location.href = "../page5-march/index.html";
  }, 1000);
});

const revealBtn = document.getElementById("revealTruth");
const otherSide = document.getElementById("otherSide");
const toMay = document.getElementById("toMay");

revealBtn.addEventListener("click", () => {
  otherSide.classList.remove("hidden");
  otherSide.scrollIntoView({ behavior: "smooth" });
  revealBtn.style.display = "none";
});

toMay.addEventListener("click", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s ease";

  setTimeout(() => {
    window.location.href = "../page7-may/index.html";
  }, 1000);
});
