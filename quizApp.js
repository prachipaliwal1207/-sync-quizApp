const quizDB = [ 
{
question: "Q1: What is the scientific name of a butterfly?",
a: "Apis",
b:"Coleoptera",
c:"Formicidae",
d:"Rhopalocera",
ans :"ans4"
},
{
question: "Q2: How hot is the surface of the sun?",
a:"1,233 K",
b:"5,778 K",
c:"12,130 K",
d:"101,300 K",
ans : "ans1"
},
{
question: "Q3: What is the capital of Spain?",
a:"Berlin",
b:"Buenos Aires",
c:"Madrid",
d:"San Juan",
ans :"ans2"
},
{
question: "Q4: How far is the moon from Earth?",
a:"7,918 miles (12,742 km)",
b:"86,881 miles (139,822 km)",
c:"238,400 miles (384,400 km)",
d:"35,980,000 miles (57,910,000 km)",
ans :"ans2"
},
{
question: "Q5: When did The Avengers come out?",
a:"May 2, 2008",
b:"May 4, 2012",
c:"May 3, 2013",
d:"April 4, 2014",
ans :"ans1"
},
{
question: "Q6: What is 48,879 in hexidecimal?",
a:"0x18C1",
b:"0xBEEF",
c:"0xDEAD",
d:"0x12D591",
ans :"ans1"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore =  document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
const questionList = quizDB[questionCount];
question.innerHTML = questionList.question;
option1.innerHTML = questionList.a;
option2.innerHTML = questionList.b;
option3.innerHTML = questionList.c;
option4.innerHTML = questionList.d;
}

const getCheckAnswer = () =>{
  let answer;
  answers.forEach((currentElem) => {
    if(currentElem.checked){
      answer = currentElem.id;
    }
  })
     return answer;
};

submit.addEventListener('click' , () => {
const checkAnswer = getCheckAnswer();
console.log(checkAnswer);
if(checkAnswer === quizDB[questionCount].ans){
  score++;
};
questionCount++;

if(questionCount < quizDB.length){
  loadQuestion();
}else{
  showScore.innerHTML = `
  <h3 class="showScored" style="text-align: center;
    margin-top: 12px;"> You scored ${score}/${quizDB.length} ✌️ </h3>
  <button class = "btn" onclick="location.reload()"> Restart </button>
  `;

  showScore.classList.remove('showArea');
}
});



loadQuestion();
