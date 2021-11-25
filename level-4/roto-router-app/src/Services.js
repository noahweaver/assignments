import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Services() {

    const servicesList = [
        {
            name: "cleaning",
            price: "$45"
        },
        {
            name: "plumbing",
            price: "$75"
        },
        {
            name: "pestcontrol",
            price: "$115"
        },
        {
            name: "lawn",
            price: "$80"
        },
    ]

    return (
        <>
            <div>
                <h1>Services</h1>
                <h3>All services are listed Here</h3>
                <ul>
                    <NavLink className="btn btn-light" 
                    style={({isActive}) => {
                    return {
                        backgroundColor: isActive ? "green" : "red"
                    }
                }}
                    to={`/home/services/${servicesList[0].name}`}>{servicesList[0].name}</NavLink>
                    <NavLink className="btn btn-light" 
                    style={({isActive}) => {
                    return {
                        backgroundColor: isActive ? "green" : "red"
                    }
                }}
                    to={`/home/services/${servicesList[1].name}`}>{servicesList[1].name}</NavLink>
                    <NavLink className="btn btn-light" 
                    style={({isActive}) => {
                    return {
                        backgroundColor: isActive ? "green" : "red"
                    }
                }}
                    to={`/home/services/${servicesList[2].name}`}>{servicesList[2].name}</NavLink>
                    <NavLink className="btn btn-light" 
                    style={({isActive}) => {
                    return {
                        backgroundColor: isActive ? "green" : "red"
                    }
                }}
                    to={`/home/services/${servicesList[3].name}`}>{servicesList[3].name}</NavLink>
                </ul>
                <Outlet />
            </div>
        </>
    )
}

export default Services
