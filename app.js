const inputs = document.querySelectorAll('.angle-input');
const checkBtn = document.querySelector('#check-btn');
const outputMsg = document.querySelector('#output-box');

function calculateTriangle(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle () {
    const sumOfAngles = calculateTriangle(
        Number(inputs[0].value),
        Number(inputs[1].value),
        Number(inputs[2].value)
    );
    if (sumOfAngles === 180){
        outputMsg.innerText = "yay! the angles can from triangle";
    } else {
        outputMsg.innerText = "opps! the angles cannot form a triangle"
    }
}
checkBtn.addEventListener("click", isTriangle)