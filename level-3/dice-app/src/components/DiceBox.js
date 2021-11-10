import React from "react"
import Dice from "./Dice"
import Button from "./Button"

class DiceBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1,
            num5: 1
        }
    }
    randomNumber = (min, max) => {
        console.log("randomNumber")
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    diceRoll = () => {
        console.log("diceRoll")
        this.setState(prevState => {
            prevState.num1 = this.randomNumber(1,6)
            prevState.num2 = this.randomNumber(1,6)
            prevState.num3 = this.randomNumber(1,6)
            prevState.num4 = this.randomNumber(1,6)
            prevState.num5 = this.randomNumber(1,6)
            return this.state
        })
    }

    render(){

        return(
            <div>
                <Dice text={this.state.num1} />
                <Dice text={this.state.num2} />
                <Dice text={this.state.num3} />
                <Dice text={this.state.num4} />
                <Dice text={this.state.num5} />
                <Button text="Roll" func={this.diceRoll} />
            </div>
        )
    }
}

export default DiceBox