const questions = [
    {
        question: "What is the capital of Turkey?",
        answers: [
            { text: "Istanbul", correct: false},
            { text: "Ankara", correct: true},
            { text: "Damascus", correct: false},
            { text: "Antalia", correct: false},
        ]
    },
    {
        question: "Which is the best season to view northern lights?",
        answers: [
            { text: "Spring", correct: true},
            { text: "Summer", correct: false},
            { text: "Autumn", correct: false},
            { text: "Winter", correct: false},
        ]
    },
    {
        question: "What is the currency in Dubai?",
        answers: [
            { text: "Riyal", correct: false},
            { text: "Lira", correct: false},
            { text: "Rupees", correct: false},
            { text: "Dirham", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition");
});

function runGame(gameType) {
    
}

function checkAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

