// pseudo code
// given webpage fully loaded
// when mouse is hovering over border
// then image moves in opposite direction

// given mouse currently on border
// when mouse isn't touching border
// then image moves back to center

let front;
let middle;
let leftBorder;

window.addEventListener("load", (event) => {
    
    front = document.getElementById("front").querySelector("img");
    middle = document.getElementById("middle");
    leftBorder = document.getElementById("left");
})


function moveLeft() {
    front.style.left = "100px";
    front.style.transition = "all 0.5s ease";
}
  