import React from 'react'

//card styling: https://getbootstrap.com/docs/5.1/components/card/

function Jokecard(props) { 

    return (
        //loading boxes?
        // conditially render style based on which page is active
        <li className="card bg-color-watermelon text-center text-white">
            <div className="card-body">
                {/* vertical align text */}
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
