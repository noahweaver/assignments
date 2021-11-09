import React from "react"

function OlderPosts(){
    
    const buttonStyle = {
        position: "relative",
        left: "80%",
        marginTop: 20,
        height: 50,
        width: 181,
        backgroundColor: "#0085A1",
        borderColor: "#0085A1",
        color: "white",
        fontWeight: 800,
    }

    return(

        <button style={buttonStyle} href="#!">OLDER POSTS → </button>
        
    )
}

export default OlderPosts