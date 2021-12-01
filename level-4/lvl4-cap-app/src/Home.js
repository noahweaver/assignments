import React, {useContext} from 'react'
import {Context} from './Context'
import Jokecard from './Jokecard'

//button style: https://getbootstrap.com/docs/5.1/components/buttons/
//card styling: https://getbootstrap.com/docs/5.1/components/card/

function Home(props) {

    const {newJoke, currentJoke} = useContext(Context)

    return (
        <div className="">
            <div className="">
                <ul className="mx-auto w-75">
                    <Jokecard 
                        setup={currentJoke.setup} 
                        delivery={currentJoke.delivery} 
                        joke={currentJoke.joke}
                    />
                </ul>
            </div>
            <button
                type="button"
                className="btn btn-outline-dark btn-sm col-3 mx-auto" 
                onClick={newJoke}>
                    Let's try a different one
            </button>
        </div>
    )
}

export default Home
