var readlineSync = require('readline-sync');
var score = 0;

var questionOne = 'Are you older than 25? '
var answeOne = 'yes'
var questionTwo = "do you know AWS: "
var answeTwo = 'yes'
var questionThree = 'do you know GCP? '
var answerThree = 'yes'
var questionFour = "Am i from the city newyork? "
var answerFour = "no"

function qna(question, answer) {
    userAnswer = readlineSync.question(question)
    console.log("You Entered " + userAnswer)
    if(userAnswer === answer) {
        console.log("you are right")
        score = score + 1
        console.log("Score is: ", score)
    } else {
        console.log("you are wrong")
        score = score - 1
        console.log("score is "+ score)
    }
}

qna(questionOne, answeOne)
qna(questionTwo, answeTwo)
qna(questionThree, answerThree)
qna(questionFour, answerFour)