const grid = document.querySelector(".grid");
const eraser = document.querySelector("#eraser");
const black = document.querySelector("#black");
const colorful = document.querySelector("#colorful");
const eraseAll = document.querySelector("#eraseAll");

eraser.addEventListener("click", activateEraser);
black.addEventListener("click", () => currentColor = "black");
eraseAll.addEventListener("click", clearGrid);

let currentColor = "black";



function generateGrid(num){
    for(let i = 1; i <= num * num; i++){
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        grid.appendChild(box);
        box.style.width = (600 / num) + "px";
        box.style.height = (600 / num) + "px";
        box.style.backgroundColor = "#eeeeee";
        box.addEventListener("mouseover", applyColor);
    }
}



function applyColor(){
    this.style.backgroundColor = currentColor;
}

function activateEraser(){
    currentColor = "#eeeeee";
}

function clearGrid(){
    let boxes = document.querySelectorAll(".box");
    for (x of boxes){
        x.style.backgroundColor = "#eeeeee";
    }
}








generateGrid(90);