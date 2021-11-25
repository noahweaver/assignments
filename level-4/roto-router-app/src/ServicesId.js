import React from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'

function ServicesId(props) {

    const navigate = useNavigate()
    const {serviceid} = useParams()

    return (
        <div>
            <p>service description : {serviceid}</p>
            <button 
                onClick={() => {
                    navigate("/dashboard", {state : serviceid})
                }}
                className="btn btn-warning"
                >
                {serviceid} Details
            </button>
            <Link to="/dashboard" state={`${serviceid} price`}>
                {serviceid} dashboard
            </Link>
        </div>
    )
}

export default ServicesId
