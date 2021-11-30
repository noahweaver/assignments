import React, {useContext} from 'react'
import {Context} from './Context'
import Jokecard from './Jokecard'


function Home(props) {

    const {newJoke, currentJoke} = useContext(Context)
    
    // const randomJoke = currentJoke
    
    const randomJoke = currentJoke = joke => 
        {
        return (
            <Jokecard 
                setup={joke.setup} 
                delivery={joke.delivery} 
                joke={joke.joke}
            />
        )
    }
    
        

    

    return (
        <>
            <ul>
                {randomJoke}
                {/* {({currentJoke}) => {<Jokecard 
                   setup={currentJoke.setup} 
                   delivery={currentJoke.delivery} 
                   joke={currentJoke.joke} 
                />}} */}
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
