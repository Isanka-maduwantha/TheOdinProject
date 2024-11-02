function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}

let numberOne = 0;
let numberTwo = 0;
let operator = "";

function operate(numberOne,numberTwo,operator){
    switch(operator){
        case "add":
            return add(numberOne,numberTwo);
            break;
        case "subtract":
            return subtract(numberOne,numberTwo);
            break;
        case "multiply":
            return multiply(numberOne,numberTwo);
            break;
        case "divide":
            return divide(numberOne,numberTwo);
            break;
        default:
            console.log("Error");
    } 
    
    
    
}

const calculatorText = document.querySelector("#textArea-text") ;


const numbers = document.querySelectorAll(".number");

for(const number of numbers){
    number.addEventListener('click',()=>{
        numberOne = number.textContent ;
        calculatorText.value += `${numberOne}`;
    })
}