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

let numberOne = "";
let numberTwo = "";
let operator = "";

function operate(numberOne,numberTwo,operator){
    numberOne *= 1;
    numberTwo *= 1;
    if(
        numberOne == 1 &&
        numberTwo == 0 &&
        operator == "divide"

    ){
        return "Error"
    }
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
        
         
         if( button.className == "number"){
          console.log(buttonText);
          if(operator == ""){
            numberOne += buttonText;
          }
          else if(operator !== ""){
            numberTwo += buttonText
          }
          calculatorText.value+= buttonText;
         }
         else if(buttonText == "."){
            console.log(buttonText)
            calculatorText.value += buttonText;
         }
         else if(buttonText == "AC"){
            calculatorText.value = "";
            numberOne = "";
            numberTwo = "";
            operator = ""

         }
         else if(button.className == "add"||
            button.className == "subtract"||
            button.className == "multiply"||
            button.className == "divide"
          )
         {
            console.log(buttonText);
            if(operator !== ""){
                calculatorText.value = operate(numberOne,numberTwo,operator) ;
                numberOne = calculatorText.value;
                console.log(`New Value ${numberOne}`)
                numberTwo = ""
                operator = button.className;
                console.log(operator)

            }
            else{
                operator = button.className;
                console.log(operator)
            }
            
            
            
           
            
            console.log(numberOne)
            calculatorText.value += buttonText;
         }
         else if(button.className == "equal" ){
            calculatorText.value = operate(numberOne,numberTwo,operator) ;

         }

        
         
         
          

    })
   
}
  
