let dice1 = Math.floor(Math.random() * 6 + 1);
let dice2 = Math.floor(Math.random() * 6 + 1);

//Roll dice on refresh
let die1 = (document.querySelector(".img1").src = `images/dice${dice1}.png`);
let die2 = (document.querySelector(".img2").src = `images/dice${dice2}.png`);

//set winner
if (die1 > die2) {
  document.querySelector("h1").innerHTML = "Player One Wins";
} else if (die2 > die1) {
  document.querySelector("h1").innerHTML = "Player Two Wins";
} else document.querySelector("h1").innerHTML = "Roll Again";
