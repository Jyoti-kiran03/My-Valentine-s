const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
  bgMusic.play().catch(()=>{});
});

// NO button escape effect
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.innerText = "You've only one option 😝";
});

// YES click → cinematic transition
yesBtn.addEventListener("click", () => {
  createHeartBurst();

  setTimeout(() => {
    window.location.href = "message.html";
  }, 4000);
});

// Falling hearts continuously
function createHeartBurst() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 25 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    document.querySelector(".petals").appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }
}

setInterval(createHeartBurst, 1200);
