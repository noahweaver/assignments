import React from "react"
import colors from "./SquareColorArray"

//this may need to be moved to the grid component
class Square extends React.Component{
    constructor(){
        super()
        this.state = {
            colors: colors.map(color => color={colors})
        }   
    }   
    render(){

        const boxStyle ={
            height: 250,
            width: 250,
            border: "2px black solid",
            margin: 5
        }
        return(
            <div>
                <div style={boxStyle}> 1 </div>
                <div style={boxStyle}> 2 </div>
                <div style={boxStyle}> 3 </div>
                <div style={boxStyle}> 4 </div>
            </div>
        )
    }
}

export default Square