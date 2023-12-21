'use strict';

const num = Math.trunc(Math.random() * 5) + 1;
let numLife = 20;
let highScore = 0;
let newHigh = [];

const displayMsg = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  
  const guessVal = Number(document.querySelector('.guess').value);
  //no input
  if(!guessVal){
    // document.querySelector('.message').textContent = "Not a number";
    displayMsg("Not a number");
  
  //player wins
  } else if(guessVal === num){
    // document.querySelector('.message').textContent = "Correct Number ✔";
    displayMsg("Correct Number ✔");
    document.querySelector('.number').textContent = num;
  
  // //My ver
  //   newHigh.push(document.querySelector('.highscore').textContent = numLife);
  //   if(newHigh [0] > numLife){
  //     highScore = newHigh [0]
  //     document.querySelector('.highscore').textContent = highScore;
  //   } else {
  //     highScore = numLife;
  //     document.querySelector('.highscore').textContent = highScore;
  //   }

  //tutorial Ver 🤡
  if(numLife > highScore){
    highScore = numLife; 
    document.querySelector('.highscore').textContent = highScore;
  } 
  //manipulate css styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  
  //too high
  } else if (guessVal !== num) {
    if(numLife > 1){
      // document.querySelector('.message').textContent = 
      // guessVal > num? "Too High 📈": "Too Low 📉";
      displayMsg(guessVal > num? "Too High 📈": "Too Low 📉");
      numLife -= 1;
      document.querySelector('.score').textContent = numLife;
      document.querySelector('.highscore') = highScore;
    } else {
      // document.querySelector('.message').textContent = "Game Over :(";
      displayMsg("Game Over :(");
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = num;
  }
  }
});

document.querySelector('.again').addEventListener('click', function(){
  numLife = 20;
  // document.querySelector('.message').textContent = "Start guessing...";
  displayMsg("Start guessing...");
  document.querySelector('.score').textContent = numLife; 
  document.querySelector('.guess').value = "";
  document.querySelector('.number').textContent = "?";
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})




 