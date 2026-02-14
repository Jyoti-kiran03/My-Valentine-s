const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");
const petals = document.querySelector(".petals");

document.body.addEventListener("click", () => {
  bgMusic.play().catch(()=>{});
});

// Floating NO button
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.innerText = "You've only one option 😝";
});

// YES click → cinematic hearts + redirect
yesBtn.addEventListener("click", () => {
  createHeartBurst();

  setTimeout(() => {
    window.location.href = "message.html";
  }, 3500);
});

// Heart rain
function createHeartBurst() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    petals.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }
}

setInterval(createHeartBurst, 1200);
