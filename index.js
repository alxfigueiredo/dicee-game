// Dice One
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

// Dice Two
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

// Display winner
var resultString = "";
if(randomNumber1 > randomNumber2)
{
  resultString = "🚩 Player 1 Wins !";
}
else if(randomNumber1 < randomNumber2)
{
  resultString = "Player 2 Wins ! 🚩";
}
else
{
  resultString = "🚩 Draw ! 🚩";
}

document.querySelector("h1").textContent = resultString;
