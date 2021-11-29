import React from 'react'
import {NavLink} from 'react-router-dom'
function Nav() {

    const navStyle = {
        display: "flex",
        "flex-direction": "row",
        "justify-content": "space-around"
    }

    return (
        <div>
            <h1>NAVBAR</h1>
            <ul style={navStyle}>
                <NavLink className="btn btn" to="/home">Home</NavLink>
                <NavLink className="btn btn" to="jokelibrary">Joke Library</NavLink>
            </ul>        
        </div>
    )
}

export default Nav
