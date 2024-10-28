const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score =document.querySelector("p");



let userScore = 0;
let computerScore = 0;
score.textContent = `You : ${userScore} Me: ${computerScore}`; 

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
   
 result.textContent +=`YOU: ${userInput}`;

  
    return userInput;
}

function playRound(userMove,computerMove){
  
   if (userMove == 'Rock'){
        if(computerMove== 'Paper'){
            result.textContent +="You lose";
            computerScore++;
        }
        else if(computerMove =="Scissors"){
            result.textContent+= "You Win";
            userScore++;
        }
        else {
            result.textContent+=`Its a Draw !`;
        }
   }
   else if (userMove == 'Paper'){
        if(computerMove== 'Rock'){
            result.textContent+= "You Win";
            userScore++;
        }
        else if(computerMove =="Scissors"){
            result.textContent +="You lose";
            computerScore++;
        }
        else {
            result.textContent+=`Its a Draw !`;
    }

   }else if (userMove == 'Scissors'){
        if(computerMove== 'Paper'){
            result.textContent+= "You Win";
            userScore++
        }
        else if(computerMove =="Rock"){
            result.textContent +="You lose";
            computerScore++;
        }
        else {
            result.textContent+=`Its a Draw !`;
        }

        

        

    
    
 
    
};
score.textContent = `You : ${userScore} Me: ${computerScore}`; 
if (userScore === 5 && computerScore < userScore){
    result.textContent = "Congratz You Win";
    userScore= 0;
    computerScore = 0;


}else if(computerScore ===5){
    result.textContent = "Sorry you Loose";
    userScore= 0;
    computerScore = 0;
    
}


}

rock.addEventListener('click',()=>{
    result.textContent =" ";
    playRound(getUserChoice("Rock"),getComputerChoice())
});
paper.addEventListener('click',()=>{
    result.textContent =" ";
    playRound(getUserChoice("Paper"),getComputerChoice())
});
scissors.addEventListener('click',()=>{
    result.textContent =" ";
    playRound(getUserChoice("Scissors"),getComputerChoice())
});



// for(let i = 0; i < 0; i++){
   
     
       
     
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