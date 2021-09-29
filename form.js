const quiz = document.querySelector('.quiz');
const submitAnswer = document.querySelector('#submit-answer-btn');
const outputText = document.querySelector('#output');

const correctAnswer =["90°", "right angled" ];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quiz);
    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score = score+1;
        }
        index = index + 1; 
    }
    outputText.innerText = "your score is" +score;
}

submitAnswer.addEventListener("click", calculateScore)