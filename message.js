const main = "Mom & Dad ❤️";
const sub = "You are my forever, my home, my everything 💖";

let i = 0, j = 0;

function typeMain() {
  if (i < main.length) {
    document.getElementById("msg").innerHTML += main.charAt(i);
    i++;
    setTimeout(typeMain, 100);
  } else {
    setTimeout(typeSub, 500);
  }
}

function typeSub() {
  if (j < sub.length) {
    document.getElementById("sub").innerHTML += sub.charAt(j);
    j++;
    setTimeout(typeSub, 80);
  }
}

typeMain();

// Falling hearts
const petals = document.querySelector(".petals");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  petals.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);
