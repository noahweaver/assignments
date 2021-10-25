//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//Below is a variable set equal to an object datatype
//Use dot and bracket notation here as well
//////////



//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement

//Using below example below to create your own conditional statement.
// var color = "red"


// if (color === "red") {
//     console.log("I am blue!")
// } else if (color === 'blue') {
//     console.log("I am red!")
// } else {
//     console.log(" i am something else!")
// }

// var sports = 'football'


// /////////



//For Loops - A their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i
//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 
//i = i + 1 same i++


//Create 1 for loop



for (var i = 0; i < 10; i++) {
    console.log(i)

}

function myGreeting(){
   alert("Welcome to my Page")
}



//////////////////
//level 0 curriculm last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method



var myButton = document.getElementById("my-button")


console.log(myButton)

myButton.addEventListener( "click" , myGreeting )