const container = document.querySelector(".container"); 
const buttonInput = document.querySelector(".number");
const blackAndWhite = document.querySelector(".baw")
buttonInput.addEventListener("click",()=>{ 
    buttonInput.style ="display:none;"
    let number = parseInt(prompt("What is your number "));numberSquare = number * number;
for(let i =0; i<numberSquare; i++){
   
    const box = document.createElement('div');
    let boxResolution = 100/number;
    // (960/number)*(number)-10
    let containerResolution = 90 ;
    
    box.style.cssText = `height:${boxResolution}%; width:${boxResolution}%;`;
    container.style.cssText = `width:${containerResolution}vh; height:${containerResolution}vh;`;
    
    box.classList.add("box");
    container.appendChild(box)
}   const boxes = document.querySelectorAll(".box");
for(const box of boxes){
   box.addEventListener('mouseover',()=>{
    box.style.cssText += `background-color: ${bgColor()}`;
})

}
})






let bgColor = function randomHex() {
    let hexCode = "0123456789ABCDEF";
    let color = "#"
    for(let i =0; i<8; i++){
        color += hexCode[Math.floor(Math.random()*hexCode.length)];
    }
    return color;
}
console.log(bgColor());