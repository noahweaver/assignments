import React from "react"

function FooterIcons(){
    
    const iconContainer ={
        display: "inline-block",
        justifyContent: "center",
    }
    const iconStyles ={
        display: "inline-block",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        
    }
    const linkStyle = {
        display: "inline-block",
        textDecoration: "none",
        color: "white",
        backgroundColor: "black",
        height: 50,
        width: 50,
        borderRadius: "50%",
    }

    return(
        <div style={iconContainer}>
            <div style={iconStyles}><a style={linkStyle} href="#!">Twitter</a></div>
            <div style={iconStyles}><a style={linkStyle} href="#!">FB</a></div>
            <div style={iconStyles}><a style={linkStyle} href="#!">GitHub</a></div>
        </div>
    )
}

export default FooterIcons