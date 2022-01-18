"used strict";
let secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector(".number").textContent = secreatNumber;
let highScore = 0;
console.log(secreatNumber);
function checkDifferentScore(high) {
  if (score > 1) {
    document.querySelector(".message").textContent =
      high == true ? "🎃To High!" : "🎃To Low!";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".score").textContent = 0;

    document.querySelector(".message").textContent = "You Lost the Game";
  }
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😒 No Number";
  } else if (guess === secreatNumber) {
    document.querySelector(".message").textContent = "🎉correct Number";
    document.querySelector("body").style.backgroundColor = " #60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secreatNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secreatNumber) {
    checkDifferentScore(true);
  } else if (guess < secreatNumber) {
    checkDifferentScore(false);
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  score = 20;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
});
