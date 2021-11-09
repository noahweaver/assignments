import React from "react"

class Buttons extends React.Component{
    
    render(){

        const buttonContainer = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            justifyItems: "center",
            margin: "auto",
            width: "50%"
        }
        const buttonStyle = {
            width: 300,
            height: 25,

        }
        return(
            <div style ={buttonContainer}>
                <button style={buttonStyle}>1</button>
                <button style={buttonStyle}>1</button>
                <button style={buttonStyle}>1</button>
                <button style={buttonStyle}>1</button>
                <button style={buttonStyle}>1</button>
                <button style={buttonStyle}>1</button>
                <button style={buttonStyle}>1</button>
                <button style={buttonStyle}>1</button>
                <button style={buttonStyle}>1</button>
            </div>
        )
    }
}

export default Buttons