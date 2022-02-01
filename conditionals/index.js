var readlineSync =  require('readline-sync')

var userAge = readlineSync.question('are you older than 25? ')
console.log('user entered is '+ userAge)
if(userAge == 'yes') {
    console.log("You are right!!!")
}else {
    console.log("You are wrong!!!")
}