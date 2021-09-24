//mostrar colores en espanol
const paletteColors = {
    red: "rojo",
    black: "negro",
    white: "blanco",
    yellow: "amarillo",
    green: "verde",
    brown: "marron",
    purple: "purpura",
    azul: "azul"
};
let selectedColor;

const selectColor = (event) => {
    selectedColor = event.target.id;
    const strongTag = document.querySelector("#selected-color");
    strongTag.textContent = paletteColors[selectedColor];
};
//pintar con click
const paintSquare = (event) => {
    //valida si hay color seleccionado
    if (!selectedColor) return;

    const selectedSquare = document.querySelector(`#${event.target.id}`);
    selectedSquare.className = `painterBlock ${selectedColor}`;

};
//pintar en movimiento
const paintSquareOnMove = (event) => {
    //si no esta apretado el click izq, no va a hacer nada
    if (event.buttons !== 1) return;
    paintSquare(event);
    
};
//resetear grid
const resetGrid = () => {
    gridSquares.forEach((square) => square.className = "painterBlock");
    selectedColor = null;
    const strongTag = document.querySelector("#selected-color");
    strongTag.textContent = "";
};


const colorSquares = document.querySelectorAll(".color");

colorSquares.forEach((square) => square.addEventListener("click", selectColor));

const gridSquares = document.querySelectorAll(".painterBlock");
//add event click
gridSquares.forEach((square) => square.addEventListener("click", paintSquare));
//add event onMove
gridSquares.forEach((square) => square.addEventListener("mousemove", paintSquareOnMove));

const reserBtn = document.querySelector("#reset-btn");

//add event onMove
reserBtn.addEventListener("click", resetGrid);
