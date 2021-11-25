import React from 'react'
import {useLocation} from 'react-router-dom'

function Dashboard(props) {

    const location = useLocation()

    return (
        <div>
            <h1>$ {location.state}</h1>
        </div>
    )
}

export default Dashboard
