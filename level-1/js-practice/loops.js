//Prelims
// for (var i = 0; i < 10; i++){
//     console.log(i)
// }
// for (var i = 9; i >= 0; i--){
//     console.log(i)
// }
// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }
//Bronze Medal

// var numbers = []
// for (var i = 0; i < 10; i++){
//     numbers.push(i)
// }
// console.log(numbers)

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i < fruit.length; i+=2){
//         console.log(fruit[i])
// }
// OR
// for (var i = 0; i <fruit.length; i++){
//     if (i % 2 === 0){
//         console.log(fruit[i])
//     }
// }

//SILVER MEDAL
var names = []
var occupations = []
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
for (var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
}
console.log(names)
console.log(occupations)