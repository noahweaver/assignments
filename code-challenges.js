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

  
  