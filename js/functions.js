/*Color the tiles Yumicode 2022*/

/* var testFunc = "Hello it's a test" */

//^VARIABLES
const container = document.querySelector("#grid-container");


//^FUNCTIONS
//~Create grid
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows); //select rows on CSS
    container.style.setProperty('--grid-cols', cols); //select cols on CSS

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div"); //create a new cell div
        cell.classList.add("grid-item"); //add class grid-item
        container.appendChild(cell); //select the parent where we want to appendChild
    };
}

//~Create random number between 0 and 9 
function randomNumber() {
    const numbers = "0123456789"
    var createRandomNumber = Math.floor((Math.random() * numbers.length));
    return numbers[createRandomNumber];
}

//~Create random letter between A and F
function randomLetter() {
    const alphabet = "ABCDEF";
    var createRandomLetter = Math.floor(Math.random() * alphabet.length);
    return alphabet[createRandomLetter];
}

//~Create random array
function randomArray() {
    let array = [];
    //Push random numbers and random letters
    array.push(randomNumber()); //choose a random number first and push
    array.push(randomLetter()); //choose a random letter and push
    //Make random numbers and letters
    let randomAll = Math.floor(Math.random() * array.length);
    //To get the random value
    return array[randomAll];
}

//~Create random HEX
function randomHex() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += randomArray();
    }
    return hex;
}

//~Select grid item and color
function selectItem() {
    const select = document.querySelectorAll(".grid-item");
    for (let item = 0; item <= select.length; item++) {
        select[item].addEventListener('mouseover', function () {
            select[item].style.backgroundColor = randomHex();
            select[item].style.transition = "all 1s";
        });
    }
}

//~Erase all
function removeColor() {
    const select = document.querySelectorAll(".grid-item");
    for (let item = 0; item <= select.length; item++) {
        select[item].style.backgroundColor = "";
        select[item].style.transition = "0.25s";
        //can reset properties by setting to an empty strings
    };
}

//~Get erase button
function eraseButton(){
    const eraseBtn = document.querySelector("#btn-change");
    eraseBtn.addEventListener('click', removeColor);
}

