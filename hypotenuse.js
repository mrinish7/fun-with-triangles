const sideInput = document.querySelectorAll ('.side');
const hypoBtn = document.querySelector ('#hypo-btn');
const outputMsg = document.querySelector ('#output-box');

function calculatehypo(a, b) {
    const sumOfSquares = a*a + b*b; 
        // console.log(sumOfSquares)
        return sumOfSquares;
}

function callHypo() {
    const sumOfSquares = calculatehypo(Number(sideInput[0].value), Number(sideInput[1].value));
    const lengthOfHypo = Math.sqrt(sumOfSquares);
    outputMsg.innerText = "the length of hypotense is " + lengthOfHypo.toFixed(2) 
}

hypoBtn.addEventListener("click", callHypo)