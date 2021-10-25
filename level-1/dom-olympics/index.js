// Qualifier
var header = document.getElementById("header");
header.innerHTML += "<h1 class='header'>JavaScript Made This!!</h1><br><h2 id='nameline'><span class='name'>Noah Weaver</span> wrote the JavaScript</h2>";
document.getElementById("nameline").style.textAlign = "center";
// Bronze
var messageLeft1 = document.getElementsByClassName("message left")[0];
messageLeft1.innerHTML = "hi";
var messageRight1 = document.getElementsByClassName("message right")[0];
messageRight1.innerHTML = "wazzzzup dawg";
var messageLeft2 = document.getElementsByClassName("message left")[1];
messageLeft2.innerHTML = "just chillin";
var messageRight2 = document.getElementsByClassName("message right")[1];
messageRight2.innerHTML = "coo";

var clearButton = document.getElementById("clear-button");
function clearContents(){
    console.log("clear button");
   messageLeft1.innerHTML = "";
   messageLeft2.innerHTML = "";
   messageRight1.innerHTML = "";
   messageRight2.innerHTML = "";
}
clearButton.addEventListener("click", clearContents);

// Silver
// var themes = document.getElementById("theme-drop-down");


// function toggleDisplay(){
//     if (value = "theme-one"){

//         document.getElementsByClassName("message left").className = "message left";
//         document.getElementsByClassName("message right").className = "message right";
//         console.log("theme one");
//     } else if (value = "theme-two"){
//         document.getElementsByClassName("message left").backgroundColor = "red";
//         document.getElementsByClassName("message right").backgroundColor = "black";
//         document.getElementsByClassName("message right").color = "white";
//         console.log("theme two");
//     }
// };
// themes.addEventListener("selectionchange", toggleDisplay);