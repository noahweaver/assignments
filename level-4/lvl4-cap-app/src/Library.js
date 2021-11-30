import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Nav from './reused_components/Nav'
import Footer from './reused_components/Footer'
import Jokecard from './Jokecard'
import {Context} from './Context'


function Library(props) {

    const navigate = useNavigate()
    const {jokesArr, moreJokes} = useContext(Context)
        
    //map jokes in state array and render Jokecard component
   


    return (
        <>
            <Nav />
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
                
                <button onClick={moreJokes}>Load More Jokes</button>
            </div>
            <Footer />
        </>
    )
}

export default Library
