import React, {useState} from "react"
import Square from "./Square"
import Buttons from "./Buttons"


function Grid () {
    
    const [colors, changeColor] = useState(["white", "white", "white", "white"])
     console.log((colors))
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

    function partyDJ() {
        console.log("Party DJ")
        changeColor(prevColor => ["purple", "purple", prevColor, prevColor]
        )
    }
           
    function changeLeftBlue() {
        console.log("changeLeftBlue")
        changeColor(prevColor => [prevColor, prevColor, "blue", prevColor]
        )
    }
    function changeRightBlue() {
        console.log("changeRightBlue")
        changeColor(prevColor => [prevColor, prevColor, prevColor, "blue"]
        )
    }
    function changeYellow() {
        console.log("changeYellow")
        changeColor(prevColor => ["yellow", prevColor, prevColor, prevColor]
        )
    }

    function changeBlack() {
        console.log("changeBlack")
        changeColor(prevColor => [prevColor, "black", prevColor, prevColor]
        )
    }
    function changeOrange() {
        console.log("changeOrange")
        changeColor(prevColor => [prevColor, prevColor, "orange", prevColor]
        )
    }
    function changeGreen() {
        console.log("changeGreen")
        changeColor(prevColor => [prevColor, prevColor, prevColor, "green"]
        )
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