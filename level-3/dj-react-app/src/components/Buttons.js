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
            <button onClick={props.onClick} style={buttonStyle}>
                {props.text}
            </button> 
            

       
    )
}

export default Buttons