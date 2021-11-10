import React from "react"


function Square (props){


    const squareStyle = {
        height: 250,
        width: 250,
        border: "2px black solid",
        margin: 5,
        backgroundColor: props.color
    }
    return(
            <div style={squareStyle}>Block</div>
    )
}

export default Square