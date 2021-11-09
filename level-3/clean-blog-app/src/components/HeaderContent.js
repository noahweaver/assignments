import React from "react"


function HeaderContent (){

    const h1Styles = {
        position: "relative",
        textAlign: "center",
        top: 100,
        fontSize: 70
    }
    const h2Styles ={
        position: "relative",
        textAlign: "center",
        top: 60
    }

    return(
        <div>
            <h1 style={h1Styles}>
                Clean Blog
            </h1>
            <h2 style={h2Styles}>
                A Blog Theme by Bootstrap
            </h2>
        </div>
    )
}

export default HeaderContent