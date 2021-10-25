// Javascript Objects Part 1

// key: value
// var person = {
//     name: "Rick",
//     age: 70,
//     friends: ["Morty", "Joe", "Sam", "Samantha"],
//     address: {
//         street: "123 street",
//         city: "Somewhere"
//     }
// }


// two notations for accessing an object's data

// Dot notation "."

// console.log(person.name)
// console.log(person.age)
// console.log(person.friends)

// console.log(person.address.street)

// Bracket notation []
// console.log( person["name"] )

//Objects can hold functions - METHOD

// "this" statement

// console.log( person["address"].city ) 
// //or
// console.log(person["address"]["city"])

var car = {
    Make: "Chevy",
    Model: "Silverado",
    Year: 2021,
    v8: true,
    citiesDriven: ["Birmingham", "Tuscaloosa", "Pelham", "Alabaster"],
    honksound: "bleeerrp"
    driver: {
        name: "Noah",
        age: 27,
        Licensed: true,
    }
    honk: function(){
        console.log(this.honksound),
    }
}

