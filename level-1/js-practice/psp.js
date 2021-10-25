//Problem Solving Practice
//4 steps to problem solving
//1 Fully understand the problem
//2 Plan out a solution
//3 Carry out your plan
//4 Review your solution


//part 1: return the largest number in an array
function largestNum (numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > largest) {
        largest = numbers[i];
        }
    }
    console.log(largest);
}
largestNum([1, 5, 7, 3]) // => 7

//part 2: return all words in an array containing a certain character
function lettersWithStrings (lettersArr, b ){
    let words = lettersArr[0];
    for (let i = 0; i < lettersArr.length; i++){
        if (lettersArr[i].includes(b)){
            words = lettersArr[i]
            console.log(words)
        }
    }
}
lettersWithStrings(["#3", "C$$$", "C%4!", "Hey!"], "!") //=> C%4! Hey!

//part 3: write a function that takes num1 and num2 and returns whether num1 is divisible by num 2
let isDivisible = false;
function divisibleBy (num1, num2){
    if (num1 % num2 === 0) {
        isDivisible = true;
        console.log(isDivisible)
    } else {
        isDivisible = false;
        console.log(isDivisible)
    }
}
divisibleBy(25, 5) // => true
divisibleBy(15, 4) // => false
divisibleBy(56, 8) // => true