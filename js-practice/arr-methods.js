var fruit = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]
//1
var poppedVeg = vegetables.pop()
console.log(poppedVeg)
console.log(vegetables)
//2
var shiftedFruit = fruit.shift()
console.log(shiftedFruit)
console.log(fruit)
//3
var indexOrange = fruit.indexOf("orange")
console.log(indexOrange)
//4
fruit.push(indexOrange)
console.log(fruit)
//5
var vegLength = vegetables.length
console.log(vegLength)
//6
vegetables.push(vegLength)
console.log(vegetables)
//7
var food = fruit.concat(vegetables)
console.log(food)
//8
food.splice(4,2)
console.log(food)
//9
food.reverse()
console.log(food)
//10
var foodString = food.join()
console.log(food)
console.log(foodString)