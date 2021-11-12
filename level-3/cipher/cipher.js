const readline = require('readline-sync');

const input = readline.question('What phrase would you like to encrypt? ').toLowerCase().split("")
const shift = parseInt(readline.question('How many letters would you like to shift?'));

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")   
let encrypted = ""
input.map(letter => {
    const index = alphabet.indexOf(letter)
    const newChar = alphabet[(index + shift)%26]
    encrypted += newChar
})
console.log(encrypted)
