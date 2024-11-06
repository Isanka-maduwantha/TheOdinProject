
let numberOne = "";
let numberTwo = "";
let operator = "";
const calculatorText = document.querySelector("#textArea-text") ;
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll("button");
const body = document.querySelector('body');

body.addEventListener('mouseenter',()=>{
    calculatorText.focus();
})
// let operationProcess = operate(numberOne,numberTwo,operator);
const operators = document.querySelectorAll(".operator")
let buttonTextSymbol ="";
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
function operatorToString(value){
    switch(value){
        case '+':
            return "add"
        case '-':
            return "subtract"
        case '*':
            return "multiply"
        case '/':
            return "divide"
        default:
            return "Error"
        
    }
}


function operate(numberOne,numberTwo,operator){
    if(numberOne ==""|| numberTwo==""||operator==""){
        return "Error"
    }
    numberOne *= 1;
    numberTwo *= 1;
    if(
        numberOne == 1 &&
        numberTwo == 0 &&
        operator == "divide"

    ){  
        return "Infinity"
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

    const input = document.querySelector('input');
    
    input.addEventListener('keydown',(event)=>{
        let keyValue = event.key;
       
        console.log(keyValue)
        if (keyValue === 'Backspace'){

            if(numberTwo =="" && numberOne!=="" && operator !== "" ){
                operator="";
                

            }
            else if(numberTwo =="" && numberOne!=="" && operator == ""){
                numberOne = String(numberOne)
                let lastLetter = numberOne.length-1;
                let result = numberOne.substring(lastLetter);
                // console.log('typeof '+typeof result)
                numberOne = numberOne.replace(result,"");
                
            }
            else if(numberTwo!==""){
                let lastLetter = numberTwo.length-1;
                let result = numberTwo.substring(lastLetter);
                numberTwo = numberTwo.replace(result,"");
                // calculatorText.value = numberOne+buttonTextSymbol+numberTwo;
            }
        }
        else if(keyValue %1 === 0){
            if(operator == ""){
                numberOne += keyValue;
              }
              else if(operator !== ""){
                numberTwo += keyValue;
              }
        }
        else if(
            keyValue == '+'||
            keyValue == '-'||
            keyValue == '*'||
            keyValue == '/'


        ){
            
            buttonTextSymbol = keyValue;
            if(operator !== ""){
                let calculation = operate(numberOne,numberTwo,operator);
                // calculatorText.value = calculation ;
                if(calculation == 'Infinity'){
                    calculatorText.value = "Infinity";
                    numberOne = "";
                    numberTwo = "";
                    operator = "";
                    
                }else{
                    numberOne = calculation;
                    calculatorText.value = numberOne; 
                   
                    numberTwo = ""
                    operator = ""
                    
                }

                
                


            }
            else{
                
                operator = operatorToString(keyValue);
                // console.log(operator)
            }
            
            
            
           
            
           
        }

        else if(keyValue=="Enter"){
            if(numberOne==="" && operator === "")
                {
                 calculatorText.value = "0";
                // console.log(calculatorText.value)
                }
            else if(numberTwo ==="")
                {
                calculatorText.value = numberOne;
                }
            else{
                let resultOperation = operate(numberOne,numberTwo,operator);

             if(resultOperation == 'Infinity' || resultOperation =="Error")
                {
                 numberOne="";
                
                }
             else
                {
                   
                    numberOne = resultOperation;
                }
                calculatorText.value = resultOperation ;
                numberTwo ="";
                operator = "";
            }
            
            

        }
        

       
       

       
    })

// keyListener();




for(const button of buttons){

    
    button.addEventListener('click',() => {
        let buttonText = button.textContent;
        let operationProcess = operate(numberOne,numberTwo,operator);
        
       
        operationProcess = Math.round(operationProcess*100000)/100000;

         if( button.className == "number" ){
          console.log(buttonText);
      
          if(operator == ""){
            numberOne += buttonText;
          }
          else if(operator !== ""){
            numberTwo += buttonText
          }
          calculatorText.value+= buttonText;
         }
         else if(button.className == "dot"){
            if(numberOne.includes(".") && numberTwo.includes(".")){
                console.log("morethan one decimal point cannot")
            }
            else if(
                
                numberOne.includes(".") && !numberTwo.includes(".") && operator ==""
                
            ){ 
                
                
                console.log("You cannot have morethan one decimal points");
                

            }
            else if( numberOne.includes(".") && !numberTwo.includes(".") && !operator ==""){
                numberTwo+= buttonText;
                calculatorText.value += buttonText;
            }
            else if(numberTwo.includes(".")){
               
                console.log("You cannot have morethan one decimal points")
            }
            else{
                if(operator == ""){
                    numberOne+= buttonText;
                }
                else{
                    numberTwo+= buttonText;
                }
                calculatorText.value += buttonText
            }
            
        
            
            
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
            
            buttonTextSymbol = buttonText;
            if(operator !== ""){
                let calculation = operationProcess;
                calculatorText.value = calculation ;
                if(calculation == 'Infinity'){
                    calculatorText.value = "Infinity";
                    numberOne = "";
                    numberTwo = "";
                    operator = "";
                    return 0;
                }

                numberOne = calculatorText.value;
              
                numberTwo = ""
                operator = button.className;
                

            }
            else{
                operator = button.className;
                
            }
            
            
            
           
            
            console.log(numberOne)
            calculatorText.value += buttonText;
         }
         else if(button.className == "equal" )
            {
            if(numberOne=="" && operator == "")
                {
                calculatorText.value = "0";
                }
            else if(numberTwo =="")
                {
                calculatorText.value = numberOne;
                }
            else{
                let resultOperation = operationProcess;

             if(resultOperation == 'Infinity' || resultOperation =="Error")
                {
                numberOne="";
                numberTwo ="";
                operator = "";
                 calculatorText.value = resultOperation ;
                }
             else
                {
                    calculatorText.value = resultOperation ;
                    numberOne = resultOperation;
                    numberTwo ='';
                    operator='';
                }
            }
            
           

         }
         else if(button.className =="delete" ){
        //  listen to backspace , if two empty others not remove operator
        // if two and operator empty remove last one from one
        // if all are full remove last one from two
            if(numberTwo =="" && numberOne!=="" && operator !== "" ){
                operator="";
                calculatorText.value = numberOne;

            }
            else if(numberTwo =="" && numberOne!=="" && operator == ""){
                numberOne = String(numberOne);
                let lastLetter = numberOne.length-1;
                let result = numberOne.substring(lastLetter);
                // console.log('typeof '+typeof result)
                numberOne = numberOne.replace(result,"");
                calculatorText.value = numberOne;
            }
            else if(numberTwo!==""){
                let lastLetter = numberTwo.length-1;
                let result = numberTwo.substring(lastLetter);
                numberTwo = numberTwo.replace(result,"");
                calculatorText.value = numberOne+buttonTextSymbol+numberTwo;
            }
           
         }

    

        
         
         
          

    })
   
}
  
