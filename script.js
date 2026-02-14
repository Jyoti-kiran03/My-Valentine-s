const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const bgm = document.getElementById("bgm");

/* START */
startBtn.addEventListener("click", () => {
  bgm.volume = 0.6;
  bgm.play().catch(()=>{});

  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
    main.classList.remove("hidden");
    startTyping();
    startSlides();
    heartEngine();
  }, 1200);
});

/* TYPEWRITER */
const text = "Mummy & Papa, your love is my strength, my happiness, and my entire world. This small gift carries big emotions just for you 💖";
let index = 0;

function startTyping() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(startTyping, 55);
  }
}

/* SLIDESHOW */
let slideIndex = 0;

function startSlides() {
  const slides = document.querySelectorAll(".slides");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";

  setTimeout(startSlides, 2600);
}

/* ULTRA SMOOTH HEART ENGINE */
function heartEngine() {
  const container = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";

    const size = Math.random() * 18 + 16;
    heart.style.fontSize = size + "px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 6 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }, 450); // optimized rate
}

/* SURPRISE LOGIC */
function showSurprise() {
  const surprise = document.getElementById("surprise");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  surprise.classList.remove("hidden");

  /* FLOATING NO */
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 140);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.innerText = "You've only one option 😝";
  });

  /* YES */
  yesBtn.addEventListener("click", () => {
    cinematicTransition();
  });
}

/* CINEMATIC TRANSITION */
function cinematicTransition() {
  const overlay = document.createElement("div");
  overlay.className = "cinema-transition";
  document.body.appendChild(overlay);

  setTimeout(() => {
    window.location.href = "message.html";
  }, 1500);
}
