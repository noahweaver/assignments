import React from 'react'
import {useNavigate} from 'react-router-dom'

function Library() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Joke Library</h1>
            <button
            onClick={() => {
                navigate("/joketypes")
            }}
            className="btn btn-light"
            >Find Joke By Type</button>
        </div>
    )
}

export default Library
