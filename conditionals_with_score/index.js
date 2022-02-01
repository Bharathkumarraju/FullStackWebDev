var readlineSync =  require('readline-sync')
var score = 0


var question1 = "Are you older than 25? "
var answerOne = "yes" 
var userAge = readlineSync.question(question1);
console.log("You entered is " + userAge)
if(userAge === answerOne){
    console.log("you are right")
    score = score + 1
    console.log("Score is " + score)
} else {
    console.log("You are wrong")
    score = score - 1
    console.log("Score is "+ score)
}

var question2 = "do you know AWS? "
var answerTwo = "yes" 
var knowAWS =  readlineSync.question(question2)
console.log("you entered " + knowAWS)
if(knowAWS === answerTwo) {
    console.log(knowAWS + " you know AWS!!!")
    score = score + 1
    console.log("Score is "+score)
} else {
    console.log(knowAWS + " you don\'t know AWS")
    score = score - 1
    console.log("Score is " + score)
}

var question3 = "do you know GCP? "
var answerThree = "yes" 
var knowGCP = readlineSync.question(question3)
console.log('you entered '+knowGCP)
if(knowGCP === answerThree){
    console.log(knowGCP+' you know GCP')
    score = score + 1
    console.log("Score is " + score)
}else {
    console.log(knowGCP+' you don\'t know GCP')
    score = score - 1
    console.log("Score is " + score)
}
