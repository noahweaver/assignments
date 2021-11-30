import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {Context} from './Context'
import Jokecard from './Jokecard'


function Library(props) {

    //if I navigate directly to jokelibrary it doesn't put ten jokes in array, thus wont map wont work, thus doesn't render
    //need useEffect to run even if jokelibrary opens first

    const navigate = useNavigate()
    const {moreJokes, jokesArr} = useContext(Context)
   
    //map to render jokesArr to jokelibrary
    const jokeList = jokesArr.map((joke) => 
        <Jokecard 
            key={joke.id} 
            setup={joke.setup} 
            delivery={joke.delivery} 
            joke={joke.joke}
        />)

    return (
        <>
            <div>
                <h1>Joke Library</h1>
                <button
                    onClick={() => {
                        navigate("/joketypes")
                    }}
                    className="btn btn-light"
                    >Find Joke By Type
                </button>
            </div>
            <div>
                <ul>
                    {jokeList}
                </ul>
                <button onClick={moreJokes}>Load More Jokes</button>
            </div>
        </>
    )
}

export default Library
