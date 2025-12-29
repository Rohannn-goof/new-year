function stopAllMusic() {
  document.querySelectorAll("audio").forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}
document.getElementById("nextBtn").addEventListener("click", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s ease";

  setTimeout(() => {
    window.location.href = "../page4-february/index.html";
  }, 1000);
});