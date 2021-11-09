import React from "react"

function Nav (){

   const navContainer = {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 25,
        paddingRight: "8%",
        marginLeft: "auto",
        width: "25%",
   }
   const linkStyles ={
       color: "white",
       textDecoration: "none",
       fontWeight: 800,
   }
   const bootstrapLink ={
        color: "white",
        textDecoration: "none",
        marginLeft: 94,
        fontSize: "1.2em",
        fontWeight: 800,
   }

    return(
        <nav>
            <div style={navContainer}>
                <a style={linkStyles} href="#home">Home</a>
                <a style={linkStyles} href="#about">About</a>
                <a style={linkStyles} href="#SamplePost">Sample Post</a>
                <a style={linkStyles} href="#Contact">Contact</a>
            </div>
            <a style={bootstrapLink} href="#StartBootstrap">Start Bootstrap</a>
        </nav>
    )
}

export default Nav