const readline = require("readline-sync");
const droppedItems = ["2011 Toyota Corolla", "cut-off jeans", "white crispy bois", "nacho cheese", "dementor", "Monster energy drink"];
const enemies = [
    {   name: "Prison Mike", 
        health: 25, 
        weakness: "dementor"},
    {   name:"Kyle", 
        health: 10, 
        weakness: "Monster energy drink"}, 
    {   name: "Wife", 
        health: 50, 
        weakness: "white crispy bois"}];

class Player {
    constructor(name, health = 100, inventory = []) {
        this.name = name,
        this.health = health,
        this.inventory = inventory
    }
}
class Enemy {
    constructor(name, health, weakness){
        this.name = name,
        this.health = health,
        this.weakness = weakness
    }
}
// const name = readline.question("Hello! Welcome to Colossal RPG! We are happy to see you! What is your name? ");
// var user = new Player(name);
// console.log("Hi " + user.name + "!");
// while (user.health > 0){
//     const walking = readline.question("enter 'w' to walk forward or 'p' to see current player status: ");
//     if (walking === "w"){
//         walk(user);
//         return;
//     } else if (walking === "p"){
//         console.log(Player)
//     }
//     if (user.health <= 0){
//         console.log("you dead. rip")
//         gameOVer = true;
//     }
//     if (foundWcb === true) {
//         console.log("You're the champion")
//         gameOver = true;
//     }
// }
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// function walk() {
//     const number = randomNumber(1,4);
//     console.log("you rolled " +number+ "!")
//     if (number === 4) {    
//         fight ()
//     } else {
//         return;
//     }
function fight (){
    const [opponent] = enemies.splice(Math.floor(Math.random() * enemies.length),1)
    let target = new Enemy(opponent);
    console.log(target)
    const running = randomNumber(0,2);
    if (running === 2){
        return;
}}
fight()
// function rip() {
//         //game over if you encounter a certain enemy
//         //game over if you reach 0 health
//         console.log("rip")
//     }
// function enemyAttack() {
//         //random enemy from array
//         //does damage if lesser health than user = to half the enemy health
//         //kills user if higher health
//         if () {
//             //subtract health
//             //tell user they won the battle and report new health and inventory
//         } else if () {
//             //enemy has higher health than user
//             rip()
//         }
//     }
// function attackEnemy() {
//         //if health is greater than the enemy? maybe some other parameter
//         if () {
//             defeatEnemy()
//         } else {
//             rip()
//         }
//     }
//      function defeatEnemy() {
//         //randomly select dropped items
//         //add dropped item to inventory
//         //subtract some health
//         //report inventory and health
//         //ask player to press w to walk
//         //remove enemy from array
//         //remove item from inventory
//     }
function itemDrop() {
    const [randomItemDrop] = droppedItems.splice(Math.floor(Math.random() * droppedItems.length), 1)
    user.inventory.push(randomItemDrop)
}
//if enemies [] has 0 enemies, game over, user wins
//gameplay
// gameOver = false;
// foundWcb = false;
// haveDementor = false;

