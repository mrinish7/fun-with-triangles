const inputB = document.querySelector ('.side-one');
const inputH = document.querySelector ('.side-two');
const calculateBtn = document.querySelector ('#calculate-btn');
const outputMsg = document.querySelector ('#output-msg');

function calculateArea() {
    const sumOfArea = (inputB * inputH) / 2;
    outputMsg.innerText= "The area of trangle is " + sumOfArea
}



calculateBtn.addEventListener("click", calculateArea)