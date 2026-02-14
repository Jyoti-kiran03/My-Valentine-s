document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startBtn");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const bgm = document.getElementById("bgm");
  const typeBox = document.getElementById("typewriter");
  const openBtn = document.getElementById("openHeartBtn");

  let i = 0;
  const text = "Mummy & Papa, your love is my strength, my happiness and my forever 💖";

  startBtn.addEventListener("click", () => {
    intro.classList.add("hidden");
    main.classList.remove("hidden");

    bgm.volume = 0.6;
    bgm.play().catch(()=>{});

    typeWriter();
    showSlides();
  });

  function typeWriter() {
    if (i < text.length) {
      typeBox.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 60);
    }
  }

  let slideIndex = 0;

  function showSlides() {
    const slides = document.getElementsByClassName("slides");
    for (let s of slides) s.style.display = "none";

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);
  }

  openBtn.addEventListener("click", () => {
    const box = document.getElementById("surprise");
    box.classList.remove("hidden");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseenter", () => {
      const x = Math.random() * (window.innerWidth - 150);
      const y = Math.random() * (window.innerHeight - 80);
      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";
      noBtn.innerText = "Only YES allowed 😝";
    });

    yesBtn.onclick = () => {
      window.location.href = "message.html";
    };
  });

});
