const music = document.getElementById("bgMusic");
music.volume = 0.25;

let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    music.play().catch(()=>{});
    musicStarted = true;
  }
}

// start music on first interaction
document.addEventListener("click", startMusic, { once: true });

// stop music on page leave
window.addEventListener("beforeunload", () => {
  music.pause();
});
document.getElementById("next").addEventListener("click", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s ease";

  setTimeout(() => {
    window.location.href = "../page9-july/index.html";
  }, 1000);
});
