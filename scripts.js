const container = document.querySelector(".container");



function generateGrid(num){
    for(let i = 1; i <= num * num; i++){
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        container.appendChild(box);
        box.style.width = (600 / num) + "px";
        box.style.height = (600 / num) + "px";
    }
}

generateGrid(50);