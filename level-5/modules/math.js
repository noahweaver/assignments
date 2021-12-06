

function sum(a, b){
    return a + b
}
function subtact(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
let factor = 2
function setFactor(newFactor){
    factor = newFactor
}

module.exports = {
    sum,
    subtact,
    multiply,
    setFactor
}
