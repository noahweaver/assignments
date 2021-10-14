const readline = require("readline-sync");
var name = readline.question("What is your name? ");

if (readline.keyInYNStrict("Hello, " +name+ ", do you want to play a game?")){
    console.log("Ok, " +name+ ", try to escape from the room.");
} else {
    console.log("too bad, we're playing.");

}
gameOver = false;
foundKey = false;


options = ["Put your hand in a hole", "Find the key", "Open the door"];
while (gameOver===false) {
    let index = readline.keyInSelect(options, 'Make your choice wisely!');
    if (index===1){
        console.log("You found the key");
        foundKey=true;
    } else if (index==2){
        if (foundKey===false){
            console.log("You need the key");
        } else {
            console.log("You have the key, go while you can!");
            gameOver=true;
        }
    } else {
        console.log("RIP");
        gameOver=true;
    }
}

// choiceList = ["Put your hand in a hole", "Find the key", "Open the door"];
// while (gameOver === false) {
//     let choice = readline.keyInSelect(choiceList, "Which choice will you make?");
//     if (choice === 1){
//         console.log("You've found the key!");
//         foundKey = true;
//     } else if (choice == 2){
//         if (foundKey === false){
//             console.log("The door is locked!");
//         } else {
//             console.log("Sweet, sweet, freedom!");
//             gameOver = true;
//     } } else {
//         console.log("You are dead.");
//         gameOver = true;
//     }
// }`

// while (!gameOver) {
    //     let index = readline.keyInSelect(options, 'Make your choice wisely!');
//     switch (index) {
//         case 0:
//             console.log("RIP");
//             // console.log(foundKey);
//             gameOver = true;
//             break;
//         case 1:
//             if (!foundKey) {
//                 console.log("You must find the key before opening the door!");
//             }
//             else {
//                 console.log("Woah, you found the key! Run as fast as you can!");
//                 gameOver = true;
//             }
//             break;
//         case 2:
//             console.log("You need the key");
//             foundKey = true;
//             break;
//         default:
//             gameOver = true;
//     }
