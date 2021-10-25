//conditionals
//boolean - true / false

// Conditionals - How we ask questions in our programs 

// Booleans - Questions evaluate to simple true or false statements, therefore the data type Boolean
//     powers most of the questions we ask in a program.
    
// Comparison Operators
//     - >, <, <=, >=, ==, ===, !=, !==
//     == is loosely equal . === is strictly equal . != is loosely unequal . !== is strictly unequal
//     stay away from the 'loosely' operators
    
// Logic Operators
//     && - and
//     || - or
//     !  - not

// Truthy and Falsey
//  Falsey
    // 0
    // ""
    // null
    // undefined
    // false
    // NaN
//Truthy
    //everything else

// Order of operations + - * /

// Switch statement


// EXAMPLES

// if (true){
// run code here
// }

//     if (false){
//  do NOT run this code here
// }

// if(true) {
//     console.log("IT is true!")
// } 
//      console returns "IT is true!" because it read the code since "if(true)"

// if(false){
//     console.log("IT is true!")
// } else {
//     console.log("IT is false")
// }
//     console returns "IT is false!" because it skipped the first line of code and read the "else" statement

// if(true){
//     console.log("IT is true!")
// } else {
//     console.log("IT is false")
// }
//     console returns "IT is true!" and the "else" statement is ignored because the first statement is true

// if(2 === 4){
//     console.log("TWO IS EQUAL TO FOUR")
// } else if(2 === 5){
//     console.log("TWO IS EQUAL TO FIVE")
// } else if(2 === 2){
//     console.log("TWO IS EQUAL TO TWO")
// }
//    console will continue to run the "else if" statements until something becomes true

// if(""){
//     console.log("it is truthy")
// } else {
//     console.log("it is falsey")
// }
//  console will run "it is falsey" because "" is a false statement
//  any characters in the "" would return truthy

// if(2 === 2 && 2 === 3){
//     console.log("It's working!")
// } else {
//     console.log("It's not working")
// }
//     Console will return "it's not working" because both statements are not correct

// if(2 === 2 || 2 === 3){
//     console.log("It's working!")
// } else {
//     console.log("It's not working")
// }
//     Console will return "it's working" because one of the two statements are correct

// var color = "blue"

// switch(color){
//   switch(color){
//     case "red":
//         console.log("The color is red")
//         break
//     case "blue":
//         console.log("The color is blue")
//         break
//     case "yellow":
//         console.log("The color is yellow")
//         break
    // default:
        // console.log("The color is not red, blue or yellow")
// }
//    Console returns "The color is blue" because the var color is blue
//         including "break" after each line prevents the code from making yellow as a true statement
//          if the color listed in the variable is not in any of the cases, it will revert to default
