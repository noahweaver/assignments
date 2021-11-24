import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {

    const navStyle = {
        display: "flex",
        "flex-direction": "row",
        "justify-content": "space-around"
    }

    return (
        <div>
            <ul style={navStyle}>
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>
    )
}

export default Nav
