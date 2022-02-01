var readlineSync = require('readline-sync');

var userName = readlineSync.question('what is your Name? ');
console.log('my name is ' +  userName + '!!!');
welcomeMessage='Welcome to ' + userName + '!!!';
console.log(welcomeMessage)