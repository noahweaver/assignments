import React from "react"
import Vacation from "./components/VacationCard"
import VacationSpots from "./components/VacationSpots"
import "./styles.css"

function App(){

    const vacations = VacationSpots.map(spots => <Vacation key={spots.id} spots={spots} />)

    return(
            <div>
                {vacations}
            </div>
    )

}

export default App