let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomMove = (Math.random()*9)
    console.log(randomMove); 
}

function getUserChoice(){
    let userInput = prompt("Your Move Rock/Paper/Scissors: ");
    console.log(userInput);
}

function playRound(userChoice,computerChoice){

    userChoice = userChoice.toLowerCase;
    if (userChoice == 'r' | userChoice =='rock'){
        userChoice = 'Rock';

    }
    else if (userChoice == 'p' | userChoice =='paper'){
        userChoice = 'Paper';
    }
    else {
        userChoice = 'Scissors';
    }

    if (computerChoice >= 0 && computerChoice < 3){
        computerChoice = "Rock";
    }
    else if (computerChoice >= 3 && computerChoice < 6){
        computerChoice = "Paper";
    }
    else{
        computerChoice ="Scissors";
    }
}