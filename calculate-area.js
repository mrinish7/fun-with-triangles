const inputB = document.querySelector ('.side-one');
const inputH = document.querySelector ('.side-two');
const calculateBtn = document.querySelector ('#calculate-btn');
const outputMsg = document.querySelector ('#output-msg');
// console.log(inputB, typeof(inputB))
function calculateArea() {
    const sumOfArea = (inputB.value * inputH.value) / 2;
    console.log(sumOfArea)
    outputMsg.innerText= "The area of trangle is " + sumOfArea
}



calculateBtn.addEventListener("click", calculateArea)