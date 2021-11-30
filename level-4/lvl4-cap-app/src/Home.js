import React, {useContext} from 'react'
import {Context} from './Context'
import Jokecard from './Jokecard'


function Home(props) {

    const {newJoke, currentJoke} = useContext(Context)

    //render single joke for homepage
   const randomJoke = currentJoke => 
        <Jokecard 
                setup={currentJoke.setup} 
                delivery={currentJoke.delivery} 
                joke={currentJoke.joke}
        />

    //styling

    return (
        <>
            <ul>
                {randomJoke}
            </ul>
            <button 
                className="" 
                onClick={newJoke}>
                    Let's try a different one
            </button>

        </>
    )
}

export default Home
