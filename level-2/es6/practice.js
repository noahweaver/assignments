//es6 practice

//### **Task 1**
// Re-write this `.map()` using an arrow function:
// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => ({ type: "carrot", name: carrot }))
//     }
// console.log(mapVegetables(carrots))

//### **Task 2**
// Re-write this `.filter()` using an arrow function:
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)
// }
// console.log(filterForFriendly(people))
//### **Task 3**
// Re-write the following functions to be arrow functions:
// const doMathSum = (a, b) => a + b
// console.log(doMathSum(1,2))

// const produceProduct = (a, b) => a * b
// console.log(produceProduct(2,5))

//### **Task 4**
// Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:
// firstName should default to "Jane"lastName should default to "Doe"age should default to 100

// const person = {
//     firstName: "Kat",
//     lastName: "Stark",
//     age: 40
// }

// const printString = ({firstName, lastName, age}) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
// console.log(printString(person))
// Hi Kat Stark, how does it feel to be 40?



//TASK #5 let and const
//Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`
//John is the pet owner, and his name should be stored differently than the other names.

// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

