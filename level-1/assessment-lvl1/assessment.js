//Colossal RPG -> Level 1 Assessment
const readline = require("readline-sync");
const droppedItems = ["2011 Toyota Corolla", "nacho cheese", "cut-off jeans", "jury duty", "a teddy bear missing an eye", "white crispy bois"];
const enemies = ["prison mike", "kyle", "karen"];
//characters
function Enemy (name, health= 50){
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
    const walking = readline.question("enter 'w' to walk or 'p' to see player status: ");
    if (walking === "w"){
        walk(user);
    } else if (walking === "p"){
        console.log(user)
    } else {
        console.log("invalid entry")
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
    if (number === 3) {    
        fight ()
    } else {
        return
    }
}
function fight (){
    const [opponent] = enemies.values(Math.floor(Math.random() * enemies.length))
    const target = new Enemy(opponent)
    let userHealth = user.health
    let targetHealth = target.health
    console.log(target)
    // console.log(enemies)
        if (user.inventory.includes("white crispy bois")){
        console.log("You are protected by 'white crispy bois' " 
        +target.name+ " cannot hurt you")
        enemies.splice(opponent,1)
        // console.log(enemies)
        itemDrop()
        } else {
            const fightOptions = readline.question("You have have found " +target.name+ " Press 'r' for a 50% chance to escape. Press 'f' to attack " +target.name+ ". NOTE: If your escape fails, " +target.name+ " will attack first. ")
            if (fightOptions === "r"){
                const running = randomNumber(0,1);
                if (running === 1){
                console.log("You escaped successfully, press 'w' to walk or 'p' to see your player profile. ")
                    //return
                enemies.splice(opponent,1)
                // console.log(enemies)
                } else if (running === 0){
//enemy attacks user
                user.health = userHealth - targetHealth
                    if (user.health > 0){
                        console.log("escape failed " +target.name+ " attacked you. You defeated " +target.name+ " . " +target.health+ " was subtracted from your total health. Your health is now " +user.health+ ".")
                        itemDrop()
                        enemies.splice(opponent,1)
                        // console.log(enemies)
                    } else {
                        console.log(target.name+ " defeated you.")
            }
        }
    } else if (fightOptions === "f"){
//user attacks enemy
        user.health = userHealth - (targetHealth / 2)
        if (user.health > 0){
            console.log("Congratulations " +user.name+ ", you defeated " +target.name+ ". You live to fight another day.")
            itemDrop()
            enemies.splice(opponent,1)
            // console.log(enemies)
            }
        }
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