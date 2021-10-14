var button = document.getElementById("button")
var body = document.getElementById("body")

function keyBlue(){
    document.getElementById("button").style.backgroundColor = "blue"
}
function keyRed(){
    document.getElementById("button").style.backgroundColor = "red"
}
function keyYellow(){
    document.getElementById("button").style.backgroundColor = "yellow"
}
function keyGreen(){
    document.getElementById("button").style.backgroundColor = "green"
}
function keyOrange(){
    document.getElementById("button").style.backgroundColor = "orange"
}
function keyBlack(){
    document.getElementById("button").style.backgroundColor = "black"
}



button.addEventListener("mouseover", keyBlue)
button.addEventListener("mouseleave", keyBlack)
button.addEventListener("mousedown", keyRed)
button.addEventListener("mouseup", keyYellow)
button.addEventListener("dblclick", keyGreen)
body.addEventListener("wheel", keyOrange)
body.addEventListener("keydown", function(event){
    if(event.which == 82){
        document.getElementById("button").style.backgroundColor = "red"
    } else if (event.which == 89){
        document.getElementById("button").style.backgroundColor = "yellow"
    } else if (event.which == 79){
        document.getElementById("button").style.backgroundColor = "orange"
    } else if (event.which == 66){
        document.getElementById("button").style.backgroundColor = "blue"
    } else if (event.which == 71){
        document.getElementById("button").style.backgroundColor = "green"
    }
    })
