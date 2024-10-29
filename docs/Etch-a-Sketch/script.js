const container = document.querySelector(".container"); 
const buttonInput = document.querySelector(".number");
const blackAndWhite = document.querySelector(".baw")
buttonInput.addEventListener("click",()=>{ 
    buttonInput.style ="display:none;"
    blackAndWhite.style = "display:block;"
    let number = parseInt(prompt("What is your number ","4"));
    let numberSquare = number * number;
    for(let i =0; i<numberSquare; i++){
   
        const box = document.createElement('div');
        let boxResolution = 100/number;
  
        let containerResolution = 90 ;
    
        box.style.cssText = `height:${boxResolution}%; width:${boxResolution}%;`;
        container.style.cssText = `width:${containerResolution}vh; height:${containerResolution}vh;`;
    
        box.classList.add("box");
        container.appendChild(box)
}       const boxes = document.querySelectorAll(".box");
        let blackOrRandom = "";
        blackAndWhite.addEventListener('click',()=>{
        blackOrRandom = "b";
       
        
    })


for(const box of boxes){
   box.addEventListener('mouseover',()=>{
    box.style.cssText += `background-color: ${bgColor(blackOrRandom)}`;
})

}
})






let bgColor = function randomHex(colorPrefer) {
    let hexCode = "0123456789ABCDEF";
    
    
    let color = "#"
    if (colorPrefer == 'b'){
        color = "#000000"
    }
    else{
        for(let i =0; i<8; i++){
        color += hexCode[Math.floor(Math.random()*hexCode.length)];
    }
    }
    
    
    return color;
}

console.log(bgColor());
