import React from "react"

function Buttons(props) {
    
    // const buttonContainer = {
    //     display: "grid",
    //     gridTemplateColumns: "1fr 1fr",
    //     gridTemplateRows: "1fr 1fr",
    //     justifyItems: "center",
    //     margin: "auto",
    //     width: "50%"
    // }
    const buttonStyle = {
        width: 300,
        height: 25,
    }

    return(
            <button onClick={props.func} style={buttonStyle}>
                {props.text}
            </button> 
            

       
    )
}

export default Buttons

//    {/* top two squares purple */}
//    <button style={buttonStyle}>Party DJ</button>

// //                {/* change color of bottom left to blue */}
// <button style={buttonStyle}>Left Blue</button>
// {/* change color of bottom right to blue */}
// <button style={buttonStyle}>Right Blue</button>
// {/* Top Right */}
// <button style={buttonStyle}>Top Right</button>
// {/* Top left */}
// <button style={buttonStyle}>Top Left</button>
// {/* bottom right */}
// <button style={buttonStyle}>Bottom Right</button>
// {/* bottom left */}
// <button style={buttonStyle}>Bottom Left</button>