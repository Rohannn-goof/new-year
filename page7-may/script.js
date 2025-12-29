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
function fadeOutMusic() {
  if (!music) return;
  let fade = setInterval(() => {
    if (music.volume > 0.02) {
      music.volume -= 0.02;
    } else {
      music.pause();
      clearInterval(fade);
    }
  }, 80);
}

  setTimeout(() => {
    window.location.href = "../page8-june/index.html";
  }, 1000);
});
const bdayBtn = document.getElementById("bdayReveal");
const birthdaySection = document.getElementById("birthdayWish");

bdayBtn.addEventListener("click", () => {
  birthdaySection.classList.remove("hidden");
  birthdaySection.scrollIntoView({ behavior: "smooth" });
  bdayBtn.style.display = "none";
});
