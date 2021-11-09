import React from "react"


function HeaderContent (){

    const h1Styles = {
        position: "relative",
        textAlign: "center",
        top: 150,
        fontSize: 70
    }
    const h2Styles ={
        position: "relative",
        textAlign: "center",
        top: 110
    }

    return(
        <div>
            <h1 style={h1Styles}>
                CLEAN BLOG
            </h1>
            <h2 style={h2Styles}>
                A Blog Theme by Bootstrap
            </h2>
        </div>
    )
}

export default HeaderContent