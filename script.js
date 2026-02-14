const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const bgm = document.getElementById("bgm");

startBtn.onclick = () => {
  intro.classList.add("hidden");
  main.classList.remove("hidden");

  bgm.play().catch(()=>{});
  startTyping();
  showSlides();
};

/* TYPEWRITER */
const text = "Mummy & Papa, your love is my strength, my happiness and my forever 💖";
let i = 0;

function startTyping() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(startTyping, 60);
  }
}

/* SLIDESHOW */
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2500);
}

/* SURPRISE */
function showSurprise() {
  const box = document.getElementById("surprise");
  box.classList.remove("hidden");

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  noBtn.onmouseenter = () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.innerText = "You've only one option 😝";
  };

  yesBtn.onclick = () => {
    window.location.href = "message.html";
  };
}

// Falling hearts background
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 5 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 9000);
}, 350);
