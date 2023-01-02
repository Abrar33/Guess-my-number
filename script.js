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
      
    }
    else if(guess>secretNumber){
        document.querySelector('.message').textContent="📈 Too Hight";
        score--;
        if(score >0){
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="You lose the Game";  
            document.querySelector('.score').textContent=0;
        }
    }
    else if(guess<secretNumber){
        document.querySelector('.message').textContent="📉 Too low";
        score--;
        if(score>0){
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="You lose the Game";  
            document.querySelector('.score').textContent=0; 
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
