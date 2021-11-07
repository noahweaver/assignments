import React from "react"


function Vacation (props){
    return(
        <div>
            <h3>{props.spots.place}: {props.spots.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <p> The best time to go is in the {props.spots.timeToGo}.</p>
        </div>
    )
}
export default Vacation