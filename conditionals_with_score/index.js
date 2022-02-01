var readlineSync =  require('readline-sync')
var score = 0 

var userAge = readlineSync.question('Are you older than 25? ');
console.log("You entered is " + userAge)
if(userAge === 'yes'){
    console.log("you are right")
    score = score + 1
    console.log("Score is " + score)
} else {
    console.log("You are wrong")
    score = score - 1
    console.log("Score is "+ score)
}

var knowAWS =  readlineSync.question('do you know AWS? ')
console.log("you entered " + knowAWS)
if(knowAWS === "yes") {
    console.log(knowAWS + " you know AWS!!!")
    score = score + 1
    console.log("Score is "+score)
} else {
    console.log(knowAWS + " you don\'t know AWS")
    score = score - 1
    console.log("Score is " + score)
}

var knowGCP = readlineSync.question('do you know GCP? ')
console.log('you entered '+knowGCP)
if(knowGCP === "yes"){
    console.log(knowGCP+' you know GCP')
    score = score + 1
    console.log("Score is " + score)
}else {
    console.log(knowGCP+' you don\'t know GCP')
    score = score - 1
    console.log("Score is " + score)
}
