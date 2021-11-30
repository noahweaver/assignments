import React, {useContext} from 'react'
import {Context} from './Context'

function Jokecard(props) {

    const {currentJoke, jokeList} = useContext(Context)
        //home card style
        //list card style

    return (

        //conditional rendering
            //if home page is active render single card, else render list format
        //if I use props I may not need conditional rendering  
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
