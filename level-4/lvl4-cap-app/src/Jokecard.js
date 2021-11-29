import React, {useContext} from 'react'
import {Context} from './Context'

function Jokecard(props) {

    const {currentJoke} = useContext(Context)
    //home card style
    //list card style

    return (
        //if home page is active render single card, else render list format
        <div>
            <h3>{currentJoke.setup}</h3>
            <h6>{currentJoke.punchline}</h6>
            <p>{currentJoke.type}</p>
        </div>
    )
}

export default Jokecard
