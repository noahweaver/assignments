import React, {useContext} from 'react'
import {Context} from './Context'

function Jokecard(props) {

    const {currentJoke, jokeList} = useContext(Context)
    //home card style
    //list card style

    return (
        //if home page is active render single card, else render list format
        <>
        <div>
            <h3>{currentJoke.setup}</h3>
            <h3>{currentJoke.joke}</h3>
            <h6>{currentJoke.delivery}</h6>
        </div>
{/* 
        <div>
            {props.setup}
            {props.delivery}
            {props.joke}
        </div> */}

        <div>
            {jokeList}
        </div>
        </>
    )
}

export default Jokecard
