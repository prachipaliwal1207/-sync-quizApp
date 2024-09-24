const quizDB = [
    {
        question: "Q1: What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Machine Language",
        c: "HyperText Marking Language",
        d: "HyperTransfer Markup Language",
        ans: "ans1"
    },
    {
        question: "Q2: What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Colorful Style Sheets",
        c: "Computer Style Sheets",
        d: "Creative Style System",
        ans: "ans1"
    },
    {
        question: "Q3: What is the correct CSS syntax to change the text color of all <p> elements to blue?",
        a: "p {color: blue;}",
        b: "p {text-color: blue;}",
        c: "p {color: #0000FF;}",
        d: "p {text: blue;}",
        ans: "ans1"
    },
    {
        question: "Q4: Which of the following is a JavaScript data type?",
        a: "Undefined",
        b: "Boolean",
        c: "Number",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "Q5: What is the output of 2 + '2' in JavaScript?",
        a: "22",
        b: "4",
        c: "NaN",
        d: "TypeError",
        ans: "ans1"
    },
    {
        question: "Q6: In CSS, what does 'flex' do?",
        a: "Makes elements responsive",
        b: "Defines flex container",
        c: "Aligns items vertically",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "Q7: What does the 'this' keyword refer to in JavaScript?",
        a: "The global object",
        b: "The object from which it was called",
        c: "The current function",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q8: Which company developed JavaScript?",
        a: "Netscape",
        b: "Microsoft",
        c: "Oracle",
        d: "Sun Microsystems",
        ans: "ans1"
    },
    {
        question: "Q9: What is the purpose of the <head> tag in HTML?",
        a: "To define the body of the document",
        b: "To contain meta-information about the document",
        c: "To display the main content",
        d: "To create links to stylesheets",
        ans: "ans2"
    },
    {
       question: "Q10: What is the correct way to create a function in JavaScript?",
        a: "function = myFunction() { }",
        b: "function myFunction() { }",
        c: "function:myFunction() { }",
        d: "myFunction() = function { }",
        ans: "ans2"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
    answers.forEach(answer => answer.checked = false);
};

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentElem) => {
        if (currentElem.checked) {
            answer = currentElem.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    if (checkAnswer === quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3 class="showScored">You scored ${score}/${quizDB.length} ✌️</h3>
            <button class="btn" onclick="location.reload()">Restart</button>
        `;
        showScore.classList.add('scoreArea');
    }
});

// Initial load
loadQuestion();
