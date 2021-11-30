import React from 'react'

function Jokecard(props) {


    return (
 
        <li>
            <h3>{props.setup}</h3>
            <h3>{props.joke}</h3>
            <h6>{props.delivery}</h6>
            {/* add categories and flags
            will need conditional rendering with boolean values in api data */}
        </li>
    )
}

export default Jokecard
