const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

let score = 0;

// Move target to random position
function moveTarget() {
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

// Shoot target
target.addEventListener("click", () => {
    score++;
    scoreText.textContent = score;
    moveTarget();
});

// Auto move target every second
setInterval(moveTarget, 1000);
moveTarget();
