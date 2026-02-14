setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 35 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.querySelector(".petals").appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 400);
