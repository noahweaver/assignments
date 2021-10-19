//Problem Solving Practice
//return the largest number in an array
function largestNum (numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > largest) {
        largest = numbers[i];
        }
    }
    console.log(largest);
}
largestNum([1, 5, 7, 3])
//attempt 2
// function largest(numbers) {  
//     let max = numbers[0]; 
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > max) 
//             max = numbers[i]; 
//     } 
//     console.log(max);
// } 
// largest([3, 5, 6, 75, 23, 48])


//return all words in an array containing a certain character
function lettersWithStrings (lettersArr, strings){
    let words = lettersArr[0];
    for (let i = 0; i < lettersArr.length; i++){
        if (lettersArr[i].includes("!")){
            words = lettersArr[i]
            console.log(words)
        }
    }
 //still need to log the string at the end
    let includedStrings = ""
    if (includedStrings.includes("!")){
        includedStrings = strings
        console.log(strings)
 }
}
lettersWithStrings(["#3", "C$$$", "C%4!", "Hey!"], "!") 