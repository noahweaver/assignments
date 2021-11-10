import React from "react"

class Square extends React.Component{

    
    render(){

        const squareStyle ={
            height: 250,
            width: 250,
            border: "2px black solid",
            margin: 5,
            

        }
        return(
                <div style={squareStyle}>Block</div>
        )
    }
}

export default Square