let raining = true;
let rainInterval;

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function startRain() {
  rainInterval = setInterval(createHeart, 200);
}

function stopRain() {
  clearInterval(rainInterval);
}

document.addEventListener("DOMContentLoaded", () => {
  startRain();

  document.getElementById('toggle-rain').addEventListener('click', () => {
    if (raining) {
      stopRain();
      document.getElementById('toggle-rain').textContent = "Iniciar a chuva";
    } else {
      startRain();
      document.getElementById('toggle-rain').textContent = "Parar a chuva";
    }
    raining = !raining;
  });

  document.getElementById('burst').addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
      setTimeout(createHeart, i * 50);
    }
  });
});
