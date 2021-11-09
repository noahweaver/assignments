import React from "react"

function Nav (){

   const navContainer = {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 25,
        paddingRight: "5%",
        marginLeft: "auto",
        width: "25%",
   }
   const linkStyles ={
       color: "white",
       textDecoration: "none",
   }

    return(
        <nav>
            <div style={navContainer}>
                <a style={linkStyles} href="#home">Home</a>
                <a style={linkStyles} href="#about">About</a>
                <a style={linkStyles} href="#SamplePost">Sample Post</a>
                <a style={linkStyles} href="#Contact">Contact</a>
            </div>
            <a style={linkStyles} href="#StartBootstrap">Start Bootstrap</a>
        </nav>
    )
}

export default Nav