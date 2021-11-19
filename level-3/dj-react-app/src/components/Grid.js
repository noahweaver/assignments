import React, {useState} from "react"
import Square from "./Square"
import Buttons from "./Buttons"


function Grid () {
    
    const [colors, changeColor] = useState(["white", "white", "white", "white"])
     
    function smallTime() {
        console.log("smallTime")
        changeColor( () => {
            const newColors = colors.map(color => {
                if (color === "white"){
                    return "black"
                } else if (color === "black"){
                     return "white"
                } else {
                    return "white"
                }
            })
            return newColors
        })
    }
    //works but only populates after I navigate back to text editor and start making changes
    function partyDJ(event) {
        event.preventDefault()
        console.log("Party DJ")
        changeColor( () => {
            colors[0] = "purple"
            colors[1] = "purple"
            return colors
        })
    }
    function changeLeftBlue() {
        console.log("changeLeftBlue")
        changeColor( () => {
            colors[2] = "blue"
            return colors
        })
    }
    function changeRightBlue() {
        console.log("changeRightBlue")
        changeColor( () => {
            colors[3] = "blue"
            return colors
        })
    }
    function changeYellow() {
        console.log("changeYellow")
        changeColor( () => { 
            colors[0] = "yellow" 
            return colors
        })
    }

    function changeBlack() {
        console.log("changeBlack")
        changeColor( ()  => {
            colors[1] = "black"
            return colors
        })
    }
    function changeOrange() {
        console.log("changeOrange")
        changeColor( () => {
            colors[2] = "orange"
            return colors
        })
    }
    function changeGreen() {
        console.log("changeGreen")
        changeColor( () => {
            colors[3] = "green"
            return colors
        })
    }

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
                <Square color={colors[0]}/>
                <Square color={colors[1]}/>
                <Square color={colors[2]}/>
                <Square color={colors[3]}/>
                <Buttons text="Small Time" onClick={smallTime} />
                <Buttons text="Party DJ" onClick={partyDJ} />
                <Buttons text="Left Blue" onClick={changeLeftBlue} />
                <Buttons text="Right Blue" onClick={changeRightBlue} />
                <Buttons text="Big Time 1 Yellow" onClick={changeYellow} />
                <Buttons text="Big Time 2 Black" onClick={changeBlack} />
                <Buttons text="Big Time 3 Orange" onClick={changeOrange} />
                <Buttons text="Big Time 4 Green" onClick={changeGreen} />
            </div>

        )
    
}

export default Grid