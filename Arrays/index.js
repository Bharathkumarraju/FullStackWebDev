/**
 * prepare a list of grocery items to buy
 * add 5 items
 * print the first item on the list
 * print the third item on the list
 * print the last item on the list
*/

function log(data){
    console.log(data)
}

var groceryList = ["Milk", "eggs", "vada pav", "samosa", "flowers", "bread", "medicines","pencil"]

console.log(groceryList[0])
console.log(groceryList[2])

console.log(groceryList.length)

var howLongIsThisArray = groceryList.length
console.log(howLongIsThisArray)

console.log(groceryList[groceryList.length -1] )


for (var i=0; i<groceryList.length; i++) {
   log(groceryList[i]);
}