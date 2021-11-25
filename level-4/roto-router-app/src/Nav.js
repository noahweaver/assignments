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
            <ul style={navStyle}>
                <NavLink className="btn btn" style={({isActive}) => {
                    return {
                        backgroundColor: isActive ? "green" : "red"
                    }
                }}
                    to="/home">Home</NavLink>
                <NavLink className="btn btn" style={({isActive}) => {
                    return {
                        backgroundColor: isActive ? "green" : "red"
                    }
                }}to="services">Services</NavLink>
                <NavLink className="btn btn" style={({isActive}) => {
                    return {
                        backgroundColor: isActive ? "green" : "red"
                    }
                }}to="about">About</NavLink>
            </ul>
        </div>
    )
}

export default Nav
