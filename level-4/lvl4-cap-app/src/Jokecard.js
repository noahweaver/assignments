import React from 'react'

//card styling: https://getbootstrap.com/docs/5.1/components/card/

function Jokecard(props) {

    const homeCardStyle = {
        "width": "75%"
    }
    const libraryCardStyle = {
        "width": "25%"
    }

    return (
        // conditially render style based on which page is active
        <li className="card" style={homeCardStyle}>
            <div className="card-body">
            <h3 className="card-title">{props.setup}</h3>
            <h3 className="card-title">{props.joke}</h3>
            <p className="card-text">{props.delivery}</p>
            {/* add categories and flags
            will need conditional rendering with boolean values in api data */}
            </div>
        </li>
    )
}

export default Jokecard
