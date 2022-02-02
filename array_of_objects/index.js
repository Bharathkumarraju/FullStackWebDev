/**
 *  Create an array of superhero objects
 *  then print name and costume color of every supehero in the list 
 *  array for loop, objects and function call
 */


 var superman = {
    name: "Superman",
    power: "flight",
    costumeColor: "blue",
    strength: 10000,
    stealth: 0,
    intelligence: 100,
  }
  
  var batman = {
      name: "batman",
      power: "martial arts",
      costumeColor: "black",
      strength: 100,
      stealth: 100,
      intelligence: 1000,
  }

var superheros = [superman, batman]

for (var i =0; i<superheros.length; i++) {
    var currentHero = superheros[i]
    console.log(currentHero.name)
    console.log(currentHero.costumeColor)
    console.log("--------------------------")
}