//Slope Style

//GREEN CIRCLE
//1
//Use the REST OPERATOR to return an array of animals, no matter how many are passed
// function collectAnimals(...inputs) {
//     let animals = []
//     animals.push(...inputs)
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//2
//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

// function combineFruit(fruit, sweets, vegetables){
    
//     return {fruit: fruit, sweets: sweets, vegetables: vegetables}
// }

// console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));


// {
//     fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//     vegetables: ["carrot"]
//  }


//3
//Use destructuring to use the property names as variables. Desructure the object in the parameter:

// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
  
//   console.log(parseSentence({location: "Burly Idaho", duration: "2 weeks"}));

//4
// Use destructuring to make this code ES6:

// function returnFirst(items){ 
//     const [firstItem] = items;
//     return firstItem
// }

//OR 

// const returnFirst = (items) => firstItem = items[0]
// console.log(returnFirst(["charger", "shoes", "ID", "suitcase"]))

//5
//Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav, ...items] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
// }

// console.log(returnFavorites(favoriteActivities))
// returnFavorites(favoriteActivities)

//BLUE SQUARE
//1
//Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals(arr1, arr2, arr3) {
//     return [...arr1, ...arr2, ...arr3]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

//BLACK DIAMOND
//1
// Try to make the following function more ES6xy:
// function product(nums) {
//     return nums.reduce(((final,num) => final*num),1)
// }

// console.log(product([2, 2, 3, 4, 5]))
//2
//Make the following function more ES6xy. Use at least both the rest and spread operators:

// function unshift(a, b, c, d, e, [...array], ...nums) {
//     return [a, b, c, d, e].concat(...array, ...nums);
//   }
// console.log(unshift(1, 2, 3, 4, 5, [1, 2, 3], 934, 43))


//DOUBLE BLACK DIAMOND
//1
//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:


// const populatePeople = (names) => {
//     return names.map(name => {
//         name = name.split(" ");
//         const [firstName, lastName] = name
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }


// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]