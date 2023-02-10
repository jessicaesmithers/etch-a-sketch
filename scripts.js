const grid = document.querySelector(".grid");
const eraser = document.querySelector("#eraser");
const black = document.querySelector("#black");
const colorful = document.querySelector("#colorful");
const eraseAll = document.querySelector("#eraseAll");
const slider = document.querySelector("input");
const sliderValue = document.createElement("h3");
const rightButtons = document.querySelector(".rightButtons");

let currentColor = "black";

generateGrid(55);
 
sliderValue.innerHTML = slider.value + " x " + slider.value;

eraser.addEventListener("click", () => currentColor = "#eeeeee");
black.addEventListener("click", () => currentColor = "black");
colorful.addEventListener("click", () => currentColor = "rainbow");
eraseAll.addEventListener("click", clearGrid);
slider.addEventListener("change", resize);
rightButtons.appendChild(sliderValue);

function generateGrid(num){
    grid.innerHTML = "";
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
    if(currentColor == "black" || currentColor == "#eeeeee"){
    this.style.backgroundColor = currentColor;
    } else {
        this.style.backgroundColor = generateRandomColor();
    }
}

function clearGrid(){
    let boxes = document.querySelectorAll(".box");
    for (x of boxes){
        x.style.backgroundColor = "#eeeeee";
    }
}

function resize(){
    generateGrid(slider.value);
    sliderValue.innerHTML = slider.value + " x " + slider.value;
}

function generateRandomColor(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

