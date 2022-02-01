function add(numberOne, numberTwo) {
    console.log("numberOne: ", numberOne, "numberTwo: ", numberTwo)
    var sum = numberOne + numberTwo;
    return sum;
}

function sub(numberOne, numberTwo){
    console.log('numberOne: ', numberOne, 'numberTwo: ', numberTwo)
    var minus = numberOne - numberTwo
    return minus
}

function mul(numberOne, numberTwo) {
    console.log('numberOne: ', numberOne, 'numberTwo: ', numberTwo)
    var product = numberOne * numberTwo
    return product
}

var result = add(99, 33);
console.log(" The sum is " + result)

var res = sub(29, 2);
console.log("The subtraction is " + res)

var res = mul(33, 3);
console.log("the product is " + res)

