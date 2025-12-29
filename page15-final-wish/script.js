const music = document.getElementById("bgMusic");
music.volume = 0.25;

let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    music.play().catch(()=>{});
    musicStarted = true;
  }
  // start music on first interaction
document.addEventListener("click", startMusic, { once: true });
}/* ========== SNOWFALL ========== */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let snowflakes = Array.from({ length: 120 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 3 + 1,
  d: Math.random() + 1
}));

function drawSnow() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";
  ctx.beginPath();

  snowflakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });

  ctx.fill();
  updateSnow();
}

function updateSnow() {
  snowflakes.forEach(f => {
    f.y += f.d;
    if (f.y > h) {
      f.y = -10;
      f.x = Math.random() * w;
    }
  });
}

setInterval(drawSnow, 30);

/* ========== SAVE HER WISH ========== */
const wishBox = document.getElementById("herWish");
const savedText = document.getElementById("savedText");

// load saved wish
wishBox.value = localStorage.getItem("newYearWish") || "";

// auto-save
wishBox.addEventListener("input", () => {
  localStorage.setItem("newYearWish", wishBox.value);
  savedText.style.opacity = 1;
  setTimeout(() => savedText.style.opacity = 0, 1200);
});
/* ========== START OVER ========== */
document.getElementById("restart").addEventListener("click", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.2s ease";

  setTimeout(() => {
    window.location.href = "../page2-entry/index.html";
  }, 1200);
});
