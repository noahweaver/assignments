import React from "react"
import Square from "./Square"

//I may need to move square constructor from the square component to this
class Grid extends React.Component {
    
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
            </div>
        )
    }
}

export default Grid