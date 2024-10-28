const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");


let userScore = 0;
let computerScore = 0;

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
    result.textContent +=`ME: ${randomMove} `;
    
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
   
 result.textContent +=`YOU: ${userInput}     `;
 result.innerHTML ="<br>";
  
    return userInput;
}

function playRound(userMove,computerMove){
    let loose = result.textContent +="You lose";
    let win =   result.textContent+= "You Win";
    let draw = result.textContent+=`Its a Draw You Entered`;
   if (userMove == 'Rock'){
        if(computerMove== 'Paper'){
            loose;
            computerScore++;
        }
        else if(computerMove =="Scissors"){
            win;
            userScore++;
        }
        else {
            draw;
        }
   }
   else if (userMove == 'Paper'){
        if(computerMove== 'Rock'){
            win;
            userScore++;
        }
        else if(computerMove =="Scissors"){
            loose;
            computerScore++;
        }
        else {
            draw;
    }

   }else if (userMove == 'Scissors'){
        if(computerMove== 'Paper'){
            win;
            userScore++
        }
        else if(computerMove =="Rock"){
            loose;
            computerScore++;
        }
        else {
            draw;
        }

   

    
    
 
    
};


}

rock.addEventListener('click',()=>{
    playRound(getUserChoice("Rock"),getComputerChoice())
});
paper.addEventListener('click',()=>{
    playRound(getUserChoice("Paper"),getComputerChoice())
});
scissors.addEventListener('click',()=>{
    playRound(getUserChoice("Scissors"),getComputerChoice())
});

// for(let i = 0; i < 0; i++){
   
     
//         playRound(getUserChoice(),getComputerChoice());
     
//     if (i == 4){
//         console.log(`My Score ${computerScore} : ${userScore} Your Score`)
//         if(computerScore> userScore){

//             console.log("I WON THE GAME");}
//         else if (computerScore < userScore){
//             console.log("i won the game Kidding kidding YOU WON!!!");
//         }
//         else{
//             console.log("FULL GAME WAS A DRAW");
//         }
    
//         let reMatch = prompt("Do you want to play Again? y/n ");
//         reMatch = reMatch.toLocaleLowerCase();
//         if(reMatch== "y"| reMatch=="yes"){
//             i = 0;
//             userScore= 0;
//             computerScore = 0;

//         }
//         else{
//              i == 4;
//         }
         
//     }
   

 
// }