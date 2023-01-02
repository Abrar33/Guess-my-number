'use strict'
console.log(document.querySelector('.message').textContent);
let secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber)
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = 'congratulation you won the game';
    console.log(guess,typeof(guess));
    console.log("Congratulation 🎉")
    if(!guess){
        document.querySelector('.message').textContent="⛔ No Guess";
        
    }
    else if(guess ===secretNumber){
        document.querySelector('.message').textContent="Victory";
        
        document.querySelector('body').style.backgroundColor="#60b347";
        document.querySelector('.number').style.width="30rem"
        document.querySelector('.number').textContent=secretNumber;
        if(score > highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
           }
      
    }else if(guess!==secretNumber){
        if(score >0){
            document.querySelector('.message').textContent=guess>secretNumber?"📈 Too Hight":"📉 Too low";
            score--;
            document.querySelector('.score').textContent=score;
        }
    }
   
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start Guessing";
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    
    const guess=Number(document.querySelector('.guess').value);
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('.number').style.width='15rem';

     

})
