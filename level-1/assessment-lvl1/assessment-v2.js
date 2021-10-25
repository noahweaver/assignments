//Colossal RPG -> Level 1 Assessment v2
const readline = require("readline-sync");
const droppedItems = ["2011 Toyota Corolla", "nacho cheese", "cut-off jeans", "jury duty", "a teddy bear missing an eye", "white crispy bois"];
const enemies = [
    {   name: "Prison Mike", 
        health: 65 
    },
    {   name:"Kyle", 
        health: 25 
    }, 
    {   name: "Karen", 
        health: 50 
    }]
//characters
function Enemy (name, health){
    this.name = name,
    this.health = health
}
class Player {
    constructor(name, health = 100, inventory = []) {
        this.name = name,
        this.health = health,
        this.inventory = inventory
    }
}
//gameplay
const name = readline.question("Hello! Welcome to Colossal RPG! We are happy to see you! What is your name? ");
const user = new Player(name);
console.log("Hi " + user.name + "!");
console.log(user)
while (user.health > 0){
    const walking = readline.keyIn("enter 'w' to walk or 'p' to see player status: ", {limit: "wp"});
    if (walking === "w"){
        walk(user);
    } else if (walking === "p"){
        console.log(user)
    }
    if (user.health <= 0){
        rip()
    }
    if (enemies.length === 0){
        console.log ("You are the CHAMPION!")
        return
    }
}
//functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function walk() {
    const number = randomNumber(1,3);
    // console.log("you rolled " +number+ "!")
    if (number === 3)
        fight ()
}
function fight (){
    const opponent = enemies.splice(Math.floor(Math.random() * enemies.length),1)
    // console.log("opponent", opponent)
    const target = new Enemy(opponent[0].name, opponent[0].health)
    // console.log("target", target)
    while (user.health > 0 && target.health > 0 ) {
    console.log(target)
    // console.log(enemies)
        if (user.inventory.includes("white crispy bois")){
        console.log("You are protected by 'white crispy bois' " 
        +target.name+ " cannot hurt you")
        itemDrop()
        } else {
            const fightOptions = readline.keyIn("You have have found " +target.name+ " Press 'r' for a 50% chance to escape. Press 'f' to attack " +target.name+ ". NOTE: If your escape fails, " +target.name+ " will attack first. ", {limit: "rf"})
            if (fightOptions === "r"){
                const running = randomNumber(0,1);
                if (running === 1){
                console.log("You escaped successfully, press 'w' to walk or 'p' to see your player profile. ")
                    return
                // console.log(enemies)
                } else if (running === 0){
//enemy attacks user
                    user.health -= (target.health * .1)
                        if (user.health > 0){
                            console.log("escape failed " +target.name+ " attacked you. The damage was subtracted from your total health. Your health is now " +user.health+ ".")
                            battle (target)
                        // console.log(enemies)
                        } else {
                            console.log(target.name+ " defeated you.")
                        }
                    }
                } else if (fightOptions === "f"){
//user attacks enemy
                     battle(target)
            // console.log(enemies)
                }
            }
        }
    }
function battle(target){
    target.health -= (user.health * .15)
    console.log("You attacked " +target.name+ " . " +target.name+ " remaining health is " +target.health)
    if (target.health > 0){
    user.health -= (target.health * .15)
    console.log(target.name+ " attacked you. Your remaining health is " +user.health)
    } else if (target.health <= 0 ){
        console.log("Congratulations, you defeated " +target.name)
        itemDrop()
    }
}
function rip() {
    console.log("you dead, RIP")
    return
}
function itemDrop() {
    const [randomItemDrop] = droppedItems.splice(Math.floor(Math.random() * droppedItems.length), 1)
    user.inventory.push(randomItemDrop)
    console.log(randomItemDrop, "was dropped and added to your inventory.")
    console.log(user)
    if (randomItemDrop === "white crispy bois"){
        console.log(" ' "+randomItemDrop+ " ' is a specail item. You will no longer take damage.")
    }
}

