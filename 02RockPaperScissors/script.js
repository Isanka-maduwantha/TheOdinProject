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
    console.log("ME: "+randomMove); 
    return randomMove;

}

function getUserChoice(){
    let userInput = prompt("Your Move Rock/Paper/Scissors: ");
    
    
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
 console.log("YOU: "+userInput);
  
    return userInput;
}

function playRound(userMove,computerMove){
    let loose = "You Lose";
    let win = "You Win";
    let draw = `Its a Draw You Entered "${userMove}" I entered "${userMove}"`;
   if (userMove == 'Rock'){
        if(computerMove== 'Paper'){
            console.log(loose);
            computerScore++;
        }
        else if(computerMove =="Scissors"){
            console.log(win);
            userScore++;
        }
        else {
            console.log(draw);
        }
   }
   else if (userMove == 'Paper'){
        if(computerMove== 'Rock'){
            console.log(win);
            userScore++;
        }
        else if(computerMove =="Scissors"){
            console.log(loose);
            computerScore++;
        }
        else {
            console.log(draw);
    }

   }else if (userMove == 'Scissors'){
        if(computerMove== 'Paper'){
            console.log(win);
            userScore++
        }
        else if(computerMove =="Rock"){
            console.log(loose);
            computerScore++;
        }
        else {
            console.log(draw);
        }

   

    
    
 
    
}console.log(`My Score- "${computerScore} : Your Score- ${userScore}`);


}

for(let i = 0; i < 4; i++){
   
     
        playRound(getUserChoice(),getComputerChoice());
     
    if (i == 3){
        if(computerScore> userScore){
            console.log("I won the Game");}
        else if (computerScore < userScore){
            console.log("I won the Game Kidding kidding You WON!!!");
        }
        else{
            console.log("FULL GAME WAS A DRAW");
        }
    
        let reMatch = prompt("Do you want to play Again? y/n ");
        reMatch = reMatch.toLocaleLowerCase();
        if(reMatch== "y"| reMatch=="yes"){
            i = 0;
            

        }
        else{
             i == 4;
        }
         
    }
   

 
}