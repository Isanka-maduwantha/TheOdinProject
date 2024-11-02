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
const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator")
for(const button of buttons){
    button.addEventListener('click',() => {
        let buttonText = button.textContent;
        for(let i =0; i<=9; i++){
         if( buttonText == i){
          console.log(i);
          calculatorText.value+= i;
         }else if(buttonText == "."){
            calculatorText.value += '.';
         }else if(buttonText == "AC"){
            calculatorText.value = "";
         }else if(button.className == "add"||
            button.className == "subtract "||
            button.className == "multiply"||
            button.className == "divide"
        ){
            console.log(buttonText);
         }
}
    })
   
}
// for(const number of numbers){
//     number.addEventListener('click',()=>{
        
        
//         calculatorText.value += number.textContent;
        
//     })
// }