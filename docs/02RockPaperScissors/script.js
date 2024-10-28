const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score =document.querySelector("p");
const body = document.querySelector("body");
const start = document.querySelector('.start');
const startBtn = document.querySelector('.game_start-btn');
const gamePlay = document.querySelector('.game-play');
const game = document.querySelector('.game');
const h1 = document.querySelector('h1');
startBtn.addEventListener('click',()=>{
    gamePlay.style = "display:flex";
    startBtn.style = "display:none";
    h1.style = "display:none;"
   
})

rock.addEventListener('click',()=>{
    result.innerHTML =" ";
    playRound(getUserChoice("Rock"),getComputerChoice())
});
paper.addEventListener('click',()=>{
    result.innerHTML =" ";
    playRound(getUserChoice("Paper"),getComputerChoice())
});
scissors.addEventListener('click',()=>{
    result.innerHTML =" ";
    playRound(getUserChoice("Scissors"),getComputerChoice())
});

body.addEventListener('keyup',(event)=>{
    if(event.key == 'r' ){
        result.innerHTML =" ";
        playRound(getUserChoice("Rock"),getComputerChoice());

    }
    else if(event.key == 'p'){
        result.innerHTML =" ";
        playRound(getUserChoice("Paper"),getComputerChoice());

    }
    else if(event.key =="s"){
        result.innerHTML =" ";
        playRound(getUserChoice("Scissors"),getComputerChoice());
    }
    else if(event.key =="a"){
        
        location.reload()
        
    }
})

let userScore = 0;
let computerScore = 0;
score.innerHTML = `You : ${userScore} Me: ${computerScore}`; 

function getComputerChoice(){
    let randomMove = (Math.random()*9)
    

    if (randomMove>= 0 && randomMove< 3){
        randomMove= "Rock";
    }
    else if (randomMove>= 3 && randomMove< 6){
        randomMove= "Paper";
    }
    else{
        randomMove="Scissors";
    }
    
    result.innerHTML +=`<span class="head">Computer</span><span> ${randomMove}</span> <br>`;
    
    

    
    return randomMove;

}


function getUserChoice(userInput){
    // let userInput = prompt("Your Move Rock/Paper/Scissors: ");
    
    
    userInput = userInput.toLowerCase();
    // console.log(userInput);
    
    if (userInput == 'r' | userInput =='rock'){
        userInput = 'Rock';

    }
    else if (userInput == 'p' | userInput =='paper'){
        userInput = 'Paper';
    }
    else {
        userInput = 'Scissors';
    }
   
 result.innerHTML +=`<span class="head">YOU:</span> <span>${userInput}</span> <br>`;
 

  
    return userInput;
}

function playRound(userMove,computerMove){
   let lose = "<span class='result-end'>You lose</span>";
   let win = "<span class='result-end'>You Win</span>";
   let tie = "<span class='result-end'>TIE</span>";
   if (userMove == 'Rock'){
        if(computerMove== 'Paper'){
            result.innerHTML +=lose;
            computerScore++;
        }
        else if(computerMove =="Scissors"){
            result.innerHTML+= win;
            userScore++;
        }
        else {
            result.innerHTML+=tie;
        }
   }
   else if (userMove == 'Paper'){
        if(computerMove== 'Rock'){
            result.innerHTML+= win;
            userScore++;
        }
        else if(computerMove =="Scissors"){
            result.innerHTML +=lose;
            computerScore++;
        }
        else {
            result.innerHTML+=tie;
    }

   }else if (userMove == 'Scissors'){
        if(computerMove== 'Paper'){
            result.innerHTML+= win;
            userScore++
        }
        else if(computerMove =="Rock"){
            result.innerHTML +=lose;
            computerScore++;
        }
        else {
            result.innerHTML+=tie;
        }

        

        

    
    
 
    
};

score.innerHTML = `You : ${userScore} Computer: ${computerScore}`; 
if (userScore === 5 && computerScore < userScore){
    start.innerHTML += "Congratz You Win   <br>press 'a' to Replay";
    userScore= 0;
    computerScore = 0;
    gamePlay.style = "display:none";
   


}else if(computerScore ===5){
    start.innerHTML += "Sorry you Loose <br>press <em>'a'</em> to Replay ";
    userScore= 0;
    computerScore = 0;
    gamePlay.style = "display:none";
   


    
}


}




