const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  startBtn.innerText = "Magic Started ✨";
});

/* Falling Hearts */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 300);
