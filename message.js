const main = "You are the most beautiful part of my life 💖";
const sub = "And from today, it's always you & me 💞";

let i = 0, j = 0;

function typeMain() {
  if (i < main.length) {
    document.getElementById("msg").innerHTML += main.charAt(i);
    i++;
    setTimeout(typeMain, 80);
  } else {
    setTimeout(typeSub, 500);
  }
}

function typeSub() {
  if (j < sub.length) {
    document.getElementById("sub").innerHTML += sub.charAt(j);
    j++;
    setTimeout(typeSub, 60);
  }
}

typeMain();

// falling hearts
const petals = document.querySelector(".petals");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  petals.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 400);
