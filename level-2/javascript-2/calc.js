const add = document["add"]
const sub = document["sub"]
const mult = document["mult"]

//add button
add.addEventListener("submit", function(event){
    event.preventDefault()
    const num1 = add.addition1.value
    const num2 = add.addition2.value
    console.log(num1, num2)
    const addResult = parseInt(num1) + parseInt(num2)
    console.log(addResult)
    const h1 = document.createElement("h1")
    h1.textContent = num1+ " + " +num2+ " = " +addResult
    document.getElementsByTagName("body")[0].append(h1)
    add.addition1.value = ""
    add.addition2.value = ""
})  
//sub button
sub.addEventListener("submit", function(event){
    event.preventDefault()
    const num1 = sub.subtraction1.value
    const num2 = sub.subtraction2.value
    console.log(num1, num2)
    const subResult = parseInt(num1) - parseInt(num2)
    console.log(subResult)
    const h1 = document.createElement("h1")
    h1.textContent = num1+ " - " +num2+ " = " +subResult
    document.getElementsByTagName("body")[0].append(h1)
    sub.subtraction1.value = ""
    sub.subtraction2.value = ""
})  
//mult button
mult.addEventListener("submit", function(event){
    event.preventDefault()
    const num1 = mult.multiplication1.value
    const num2 = mult.multiplication2.value
    console.log(num1, num2)
    const multResult = parseInt(num1) * parseInt(num2)
    console.log(multResult)
    const h1 = document.createElement("h1")
    h1.textContent = num1+ " x " +num2+ " = " +multResult
    document.getElementsByTagName("body")[0].append(h1)
    mult.multiplication1.value = ""
    mult.multiplication2.value = ""
})  