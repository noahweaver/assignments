import React from "react"


function Vacation (props){
    const divStyles = {
        textAlign: "center",
        margin: 0,
        padding: 0
    }
    const h1Styles = {
        fontSize: 50,
        color: "#234532",
        fontFamily: "cursive",
        marginBottom: 0,
        paddingBottom: 0,
    }
    const pStyles = {
        paddingBottom: 50
    }
    return(
        <div style={divStyles}>
            <h3 style={h1Styles}>{props.spots.place}: {props.spots.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <p style={pStyles}> The best time to go is in the {props.spots.timeToGo}.</p>
        </div>
    )
}
export default Vacation