import React from "react"
import Nav from "./Nav"
import HeaderContent from "./HeaderContent"

function Header(){

    return(
        <div className="header">
            <Nav />
            <HeaderContent />
        </div>
    )
}
export default Header