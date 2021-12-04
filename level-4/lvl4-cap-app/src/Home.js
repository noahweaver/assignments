import React, {useContext} from 'react'
import {Context} from './Context'
import Jokecard from './Jokecard'

//button style: https://getbootstrap.com/docs/5.1/components/buttons/
//card styling: https://getbootstrap.com/docs/5.1/components/card/

function Home(props) {

    const {newJoke, currentJoke} = useContext(Context)

    return (
        // see about making everythingn in this div bigger
        <div className="container vh-65 d-flex flex-column align-items-center justify-content-center mb-3">
            <p className="display-4 m-0 p-2 text-center">Try this one!</p>
            <div className="">
                <ul className="w-75 p-0 m-auto">
                    <Jokecard 
                        setup={currentJoke.setup} 
                        delivery={currentJoke.delivery} 
                        joke={currentJoke.joke}
                    />
                </ul>
            </div>
            <button
                type="button"
                className="btn btn-outline-dark btn-sm col-3 m-3" 
                onClick={newJoke}>
                    Give me another
            </button>
        </div>
    )
}

export default Home
