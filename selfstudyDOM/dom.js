
var buttonElement = document.getElementById("button")

function buttonClick() {
    var addedText = document.getElementById("blank");
    console.log(addedText.value);
    var para =  document.createElement("P")
    para.innerText = addedText.value;
    document.body.append(para);
} 

buttonElement.addEventListener("click", buttonClick)

