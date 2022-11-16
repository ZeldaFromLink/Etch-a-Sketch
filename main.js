let color = "black";
let click = false;

//Yell at user

document.addEventListener("DOMContentLoaded", function(){
    createScreen(16);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Draw NOW!";
            }
            else{
                draw.innerHTML = "Can't draw #SorryNotSorry"
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createScreen(size);
    })
})

//create the screen and get input from mouse

function createScreen(size){
    let screen = document.querySelector(".screen");

    screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for(let i = 0; i < numDiv; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        screen.insertAdjacentElement("beforeend", div);
    }
}

//let user input size of screen

function getSize(){
    let input = prompt("Select a size of screen.");
    let message = document.querySelector("#message");
    if(input == "" || input !== Number){
        message.innerHTML = "Provide a number";
    }
    else if (input < 1 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100"
    } 
    else{
        message.innerHTML = "Play"
        return input;
    }
}

//make random button give random colors and allow user to draw on click

function colorDiv(){
    if(click){
        if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else{
        this.style.backgroundColor = 'black'
        }
    }
}



function setColor(colorSelect){
    color = colorSelect;
}

//make reset button reset screen to white

function resetScreen(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}