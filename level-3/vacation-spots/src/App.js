import React from "react"
import Vacation from "./components/VacationCard"
import VacationSpots from "./components/VacationSpots"


function App(){
    const divStyles ={
        backgroundColor: "#4526",
        margin: 0,
        padding: 0,
    }
    const vacations = VacationSpots.map(spots => <Vacation key={spots.id} spots={spots} />)

    return(
        //did <body> here to attempt styling to the body as opposed to a div, didn't work
        <body style={divStyles}>
            <div>
                {vacations}
            </div>
        </body>
    )

}

export default App