//11/3/2021
function findLongestWord(str) {
    const split =  str.split(" ")
    const longestFirst = split.sort((a,b) => b.length - a.length)
    return `"${longestFirst[0]}" is ${longestFirst.length} characters long`
  }
  console.log(findLongestWord("The quick brown fox jumped over the last dog"))