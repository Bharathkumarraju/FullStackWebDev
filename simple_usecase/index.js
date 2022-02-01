var readlineSync = require('readline-sync');

var userName = readlineSync.question('whats your name? ');
console.log('my name is '+ userName+ '!!!');

var welcomeMessage = "Welcome " + userName + "!!!";
console.log(welcomeMessage)

var favFood =  readlineSync.question('My favourite food is ', {
    hideEchoBack: true
});
console.log('oh, ' + userName + '\'s favourite food is ' + favFood)
