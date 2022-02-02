var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("What is your Name? ");
console.log("Welcome to JavaScript world "+userName+"!");

function play(question, answer) {
  userAnswer = readlineSync.question(question);
  console.log("User entered answer is: " + userAnswer);
  if(userAnswer.toUpperCase()===answer.toUpperCase()) {
    console.log("Right Answer!");
    score = score + 1;
    console.log("-----------------------")
  }else {
    console.log("Wrong Answer!")
  }
  console.log("your score is: "+score)
}

questions = [
  {
    question: "What is the captial city of Germany? ",
    answer: "berlin"
  },
  {
    question: "What is the captial city of France? ",
    answer: "paris"
  },
  {
    question: "What is the capital city of Telangana? ",
    answer: "hyderabad"
  },
  {
    question: "What is the captial city of TamilNadu? ",
    answer: "chennai"
  },
  {
    question: "What is the capital city of England? ",
    answer: "london"
  }
]

for (i=0; i<questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log("Your Final Score is: "+ score)