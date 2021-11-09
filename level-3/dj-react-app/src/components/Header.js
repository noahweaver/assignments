import React from "react"

class Header extends React.Component{

    render(){

        const headerStyle ={
            fontFamily: "sans-serif",
            textAlign: "center",
            textDecoration: "underline"
        }

        return(
            <h1 style={headerStyle}>DJ REACT</h1>
        )
    }
}

export default Header