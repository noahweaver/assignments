//The Princess is in Another Castle
const statusOptions = ["DEAD", "small", "Big", "POWERED UP"]
let gameActive = true
class Player{
    constructor(name, totalCoins = 0, statusIndex = 2, hasStar = false){
        this.name = name
        this.totalCoins = totalCoins,
        this.statusIndex = statusIndex,
        this.hasStar = hasStar
    }
    setName(namePicked){
        namePicked = this.name
        console.log(this.name)
    }
    // getStar(){
    //     this.hasStar === true
    // }
    gotHit(){
        if (statusOptions[this.statusIndex] === "small") {
            statusOptions[this.statusIndex] = "DEAD"
            gameActive = false
        } else if (statusOptions[this.statusIndex] === "Big") {
            statusOptions[this.statusIndex] = "small"
        } else {
            statusOptions[this.statusIndex] = "Big"
        }
        }
    gotPowerup(){
        if (statusOptions[this.statusIndex] === "small"){
            statusOptions[this.statusIndex] = "Big"
        } else if (statusOptions[this.statusIndex] === "Big") {
            statusOptions[this.statusIndex] = "POWERED UP"
        }
    }
    addCoin(){
        this.totalCoins += 1
    }
    print() {
        console.log(`Name: ${this.name}, Status: ${statusOptions[this.statusIndex]},Total Coins: ${this.totalCoins}`)
        if (this.hasStar === true){
            console.log("You have a star!")
        }
    }
}
let gameInterval
const game = () => {
    const mario = new Player("Mario", 0, 1, false)
    // setName(mario.name)
          
    const runGame = () => {
        let randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        switch (randomNumber(0,2)) {
            case 0:
                mario.gotHit()
                mario.print()
                break
            case 1:
                mario.gotPowerup()
                mario.print()
                break
            case 2:
                mario.addCoin()
                mario.print()
                break
        }
        if(gameActive === false){
            clearInterval(gameInterval)
        }
        }
      gameInterval = setInterval(runGame, 1000);

    }
game()