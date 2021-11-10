import React from "react"
import Square from "./Square"
import Buttons from "./Buttons"
// import ColorsArray from "./ColorsArray"

//Colors Array
//["black", "white", "white", "white"]

// const colors = ColorsArray.map(color => <Square backgroundColor={color} />)
//ColorsArray.map(color => <Square color={color} />)

class Grid extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            colors: ["white", "white", "white", "white"]
        }   
    }  
    smallTime = () => {
        console.log("smallTime")
        this.setState(prevState => {
            const colors = prevState.colors.map(color => {
                if (color === "white"){
                    return "black"
                } else if (color === "black"){
                     return "white"
                } else {
                    return "white"
                }

            })
            console.log({colors: colors})
            return {colors: colors}
        })
    }
    partyDJ = () => {
        console.log("Party DJ")
        this.setState(prevState => {
            prevState.colors[0] = "purple"
            prevState.colors[1] = "purple"
            return this.state.colors
        })
    }
    changeLeftBlue = () => {
        console.log("changeLeftBlue")
        this.setState(prevState => {
            return prevState.colors[2] = "blue"
        })
    }
    changeRightBlue = () => {
        console.log("changeRightBlue")
        this.setState(prevState => {
            return prevState.colors[3] = "blue"
        })
    }
    changeYellow = () => {
        console.log("changeYellow")
        this.setState(prevState => {
            return prevState.colors[0] = "yellow"
        })
    }
    changeBlack = () => {
        console.log("changeBlack")
        this.setState(prevState => {
            return prevState.colors[1] = "black"
        })
    }
    changeOrange = () => {
        console.log("changeOrange")
        this.setState(prevState => {
            return prevState.colors[2] = "orange"
        })
    }
    changeGreen = () => {
        console.log("changeGreen")
        this.setState(prevState => {
            return prevState.colors[3] = "green"
        })
    }
    render(){
        
        const gridContainer = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            justifyItems: "center",
            margin: "auto",
            width: "50%"
        }

        
        return(

            <div style={gridContainer}>
                <Square color={this.state.colors[0]}/>
                <Square color={this.state.colors[1]}/>
                <Square color={this.state.colors[2]}/>
                <Square color={this.state.colors[3]}/>
                <Buttons text="Small Time" func={this.smallTime} />
                <Buttons text="Party DJ" func={this.partyDJ} />
                <Buttons text="Left Blue" func={this.changeLeftBlue} />
                <Buttons text="Right Blue" func={this.changeRightBlue} />
                <Buttons text="Big Time 1" func={this.changeYellow} />
                <Buttons text="Big Time 2" func={this.changeBlack} />
                <Buttons text="Big Time 3" func={this.changeOrange} />
                <Buttons text="Big Time 4" func={this.changeGreen} />
            </div>

        )
    }
}

export default Grid