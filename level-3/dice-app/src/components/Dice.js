import React from 'react'

function Dice(props) {

    const diceStyle = {
        height: 50,
        width: 50,
        border: "2px black solid",
        margin: 5
    }
    return(
            <div style={diceStyle}>{props.text}</div>
    )
}

export default Dice
