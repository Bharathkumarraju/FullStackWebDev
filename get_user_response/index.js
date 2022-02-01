var readlineSync = require('readline-sync')

if (readlineSync.keyInYN('install the module Now? ')) {
    console.log('installing....')

} else {
    console.log('installing another')
}

var readlineSync = require('readline-sync'),
    movies = [ "83", "akhanda", "pushpa", "bahubali1", "bahubali2"],
    index = readlineSync.keyInSelect(movies, 'which movie? ')
console.log("I am watching " + movies[index] + " in the cinema hall")
