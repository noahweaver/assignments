//FIZZBUZZ

const counter = {
    FIZZBUZZ: 0,
    fizz: 0,
    buzz: 0
}
function fizzBuzz () {
for (let i = 1; i <=100; i++){
    if (i % 15 == 0){
    console.log("FIZZBUZZ");
    counter.FIZZBUZZ++;
    } else if (i % 3 == 0){
        console.log("fizz");
        counter.fizz++;
    } else if (i % 5 == 0) {
        console.log("buzz");
        counter.buzz++;
    } else console.log(i);
}}
fizzBuzz ()
console.log(counter)


