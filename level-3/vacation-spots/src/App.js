import React from "react"
import VacationCard from "./components/VacationCard"
import VacationSpots from "./components/VacationSpots"
import "./styles.css"

function App(){

    const vacations = VacationSpots.map(spots => <VacationCard key={spots.id} spots={spots} />)

    return(
            <div>
                {vacations}
            </div>
    )

}

export default App