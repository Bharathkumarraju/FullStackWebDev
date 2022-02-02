var readlineSync = require("readline-sync")
var score = 0;

var userName = readlineSync.question("Whats your name!!! ")
console.log("Welcome to " + userName +"!!!")

function play(question, answer) {
    var userAnswer = readlineSync.question(question)
    console.log("you entered "+userAnswer)
    if(userAnswer===answer) {
        console.log("Right!!!");
        score = score + 1;
    }else{
        console.log("wrong!!!")
    }

    console.log("Score is", score)
    console.log("--------------")
}

var questions = [
    {
        question: "Whats your favourite color? ",
        answer: "Blue"
    },
    {
        question: "who is your favorite super hero? ",
        answer: "Hulk"
    },
    {
        question: "where do you live? ",
        answer: "Singapore"
    }
]

for ( var i=0; i<questions.length; i++) {
    play(questions[i].question, questions[i].answer)
}

console.log("the final score is: "+score)