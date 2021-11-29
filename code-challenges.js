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
function solution (num){
  
}
console.log(solution(4.2))
// = 4
// console.log(solution(4.3))
//  = 4.5
// console.log(solution(4.6))
//  = 4.5
// console.log(solution(4.8))
//  = 5
//console.log(solution(4.75)) 
// == 5