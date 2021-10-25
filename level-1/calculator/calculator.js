const readline = require("readline-sync");

var num1 = readline.question("Please enter your first number: ");
var num2 = readline.question("Please enter your second number: ");
var operation = readline.question("Please enter the operation to perform [add, sub, mul, div] : "); 

if (operation === "add"){
   add(num1,num2);
   console.log("The result is: " + add(num1,num2))
} 
else if (operation === "sub"){
    console.log("The result is: " + subtract(num1,num2));
}
else if (operation === "mul"){
    console.log("The result is: " + multiply(num1,num2));
}
else if (operation === "div"){
    console.log("The result is: " + divide(num1,num2));
}

// functions
function add(num1, num2){
    return parseInt(num1) + parseInt(num2);
}
function subtract(num1, num2){
    return (num1 - num2);
}
function multiply(num1, num2){
    return (num1 * num2);
}
function divide(num1, num2){
    return (num1 / num2);
}