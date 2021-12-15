//code challenges

//problem solving process
  //1. fully understand the problem
  //2. plan a solution (pseudo code)
  //3. carry out plan
  //4. review/test

// 11/3/2021
// function findLongestWord(str) {
//     const split =  str.split(" ")
//     const longestFirst = split.sort((a,b) => b.length - a.length)
//     return `${longestFirst[0]} is the longest word. The length is ${longestFirst[0].length} characters`
//   }
//   console.log(findLongestWord("The quick brown fox jumped over the last dog"))

//   function findLongestWord(str) {
//     const split =  str.split(" ")
//     let longestWord = 0
//     for (let i=0; i < split.length; i++){
//       if (split[i].length > longestWord){
//         longestWord = split[i].length
//       }
//     }
//     return longestWord
//   }
//   console.log(findLongestWord("The quick brown fox jumped over the last dog"))

  // function findLongest(str) {
  //   let longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  //   return longestWord[0].length;
  // }
  // console.log(findLongest("Lets find the longest word in this string value here, have you ever been to Mississippi?"))

  //   function findLongestWord(str) {
  //   const split =  str.split(" ")
  //   let longestWord = split.reduce((longest, current) => {
  //     if(current.length > longest.length) {
  //       return current 
  //     } else {
  //       return longest      
  //     }
  //   })
  //   return longestWord.length
  // }
  // console.log(findLongestWord("The quick brown fox jumped over the last dog"))

  //11/10/21
  //Today’s Coding Challenge: “Title Case a Sentence”… return the provided string with the first letter of each word capitalized. Also capitalize connecting words like “the” and “of”.
  // function titleCase(str) {
  //     return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(" ")
  // }
  // console.log(titleCase("I’m a little tea pot"))

  //or

//   function titleCase(str) {
//     return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
// }
// console.log(titleCase("I’m a little tea pot"))
//or

//   function titleCase(str) {
//     return str.split(" ").map(word => word.slice(0,1).toUpperCase() + word.substr(1)).join(" ")
// }
// console.log(titleCase("I’m a little tea pot"))

  
//  11/17/2021

// function isPrime(n) {
//   for (let i = 2; i < n; i++){
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return n > 1 //what's happening here?
// }
// console.log(2, " is prime? ", isPrime(2));
// console.log(3, " is prime? ", isPrime(3));
// console.log(4, " is prime? ", isPrime(4));
// console.log(5, " is prime? ", isPrime(5));
// console.log(9, " is prime? ", isPrime(9));



//  11/22/2021
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.


// function list(arr){
//   const namesOnlyArray = arr.map(person => person.name)
//   if (namesOnlyArray.length >= 2) {
//     return namesOnlyArray.slice(0, -1).join(", ") + " & " + namesOnlyArray.slice(-1)
//   } else if (namesOnlyArray.length === 1){
//     return namesOnlyArray.join("")
//   } else if (namesOnlyArray.length === 0){
//     return ""
//   }
// }

// console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// returns 'Bart, Lisa & Maggie'

// console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// // returns 'Bart & Lisa'

// console.log(list([ {name: 'Bart'} ]))
// // returns 'Bart'

// console.log(list([]))
// // returns ''

// 11/29/2021
// Round any given number to the closest 0.5 step
//Round up if number is as close to previous and next 0.5 steps.

// function solution(n){
//   // .round to the nearest whole number,
//   //doubled>rounded>halfed  
//     let rounded= Math.round( n * 2 ) / 2;
//     console.log(n)
    
//     return rounded
//     }
// console.log(solution(4.2))
// // = 4
// console.log(solution(4.3))
// //  = 4.5
// console.log(solution(4.6))
// //  = 4.5
// console.log(solution(4.8))
// //  = 5
// console.log(solution(4.75)) 
// // == 5


// const arr = (2.3 + "").split(".")


//12/1/21
// /// [[0,0,0][0,0,0][0,0,0]]
// var array1 = [ ]

// for(var i = 0; i < 3; i++){
//   let array2 = []
//     for(var j = 0; j < 3; j++){
//       array2.push(0);
//     }
//         array1.push(array2)
// }

// console.log(array1)


// /// [[0,0,0][1,1,1][2,2,2]]
// var array1 = [ ]

// for(var i = 0; i < 3; i++){
//   let array2 = []
//     for(var j = 0; j < 3; j++){
//       array2.push(i);
//     }
//         array1.push(array2)
// }

// console.log(array1)


// /// [[0,1,2][0,1,2][0,1,2]]
// var array1 = [ ]

// for(var i = 0; i < 3; i++){
//   let array2 = []
//     for(var j = 0; j < 3; j++){
//       array2.push(j);
//     }
//         array1.push(array2)
// }

// console.log(array1)

//12/6/21
// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.
// function dirReduc(arr){
    
//   let noChanges = false
  
  
//   while(!noChanges){
//         console.log(arr)
//     noChanges = true
//     for(let i = 0; i < arr.length; i++){
//       console.log(arr)
//       if(arr[i] === "WEST"){
//         if(arr[i+1] === "EAST"){
//           arr.splice(i, 2)
//           noChanges = false
//         }
//       }
//       if(arr[i] === "EAST"){
//         if(arr[i+1] === "WEST"){
//           arr.splice(i, 2)
//           noChanges = false

//         }
//       }
//       if(arr[i] === "SOUTH"){
//         if(arr[i+1] === "NORTH"){
//           arr.splice(i, 2)
//           noChanges = false

//         }
//       }
//      if(arr[i] === "NORTH"){
//         if(arr[i+1] === "SOUTH"){
//           arr.splice(i, 2)
//           noChanges = false

//         }
//       }
//     }
//   }
  
//   return arr
// }
//or this

// function dirReduc(arr){
//   // cancel out norths and souths
//   // cancel out easts and wests
//   const opposite = {
//     SOUTH: "NORTH",
//     NORTH: "SOUTH",
//     WEST: "EAST",
//     EAST: "WEST"
//   } 
  
//   let noChanges = false
  
//   while(!noChanges){
//     console.log(arr)
//     noChanges = true
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] === opposite[arr[i]]){
//           arr.splice(i, 2)
//           noChanges = false
//       }
//     }
//   }
  
//   return arr
// }

//12/8/2021
//check whether the two input strings are anagrams
// const anagrams = (str1, str2) => {
  
//   //.sort default sorts to alphabetical order
//   const string1 = str1.split("").sort().join("")
//   const string2 = str2.split("").sort().join("")
//   console.log(string1, string2)
  
//   if (string1 === string2){
//     return true
//   } else {
//     return false
//   }
  
// }
// console.log(anagrams("abc", "cab"))

//12/13/2021
// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

//second array alwasy longer
// function findMissing(arr1, arr2){
//   arr1.sort()
//   arr2.sort()

//   for(let i = 0; i < arr1.length; i++){
//     if(arr1[i] !== arr2[i]){
//       return arr1[i]
//     }
//   }
// }
//12/15/2021
// const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24

// function getDaysBetweenDates(dateText1, dateText2) {
//   const date1 = new Date(dateText1)
//   const date2 = new Date(dateText2)

//   const diffTime = Math.abs(date2-date1)
//   const diffDays = Math.ceil(diffTime/ DAY_IN_MILLISECONDS)

//   return diffDays

// }

// console.log(getDaysBetweenDates('10/15/2020', '12/1/2020'));