import React, {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Context} from './Context'
import Jokecard from './Jokecard'

//button style: https://getbootstrap.com/docs/5.1/components/buttons/
//card styling: https://getbootstrap.com/docs/5.1/components/card/


function Library(props) {

    //if I navigate directly to jokelibrary it doesn't put ten jokes in array, thus wont map wont work, thus doesn't render
    //need useEffect to run even if jokelibrary opens first

    const navigate = useNavigate()
    const {moreJokes, jokesArr, tenJokes} = useContext(Context)

    // useEffect(() => {
    //     alert("WARNING: Proceed with caution. There are many dark and potentially offensive jokes used in this app. No offense is meant, but if you are easily offended you might not want to proceed.")
    // }, [])

   //DidMount jokes for jokelibrary page
//    useEffect(() => {
//         tenJokes()
//     }, [])

   
    //map to render jokesArr to jokelibrary
    const jokeList = jokesArr.map(joke => 
        <Jokecard 
            key={joke.id} 
            setup={joke.setup} 
            delivery={joke.delivery} 
            joke={joke.joke}
        />)

    return (
        <>
            <div className="mt-6rem">
                <h1>Joke Library</h1>
                <button
                    onClick={() => {
                        navigate("/joketypes")
                    }}
                    className="btn btn-outline-dark btn-sm mx-auto"
                    >Find Joke By Type
                </button>
            </div>
            <div className="mx-auto">
               <div className="">
                    <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 pad-5 g-4">
                    {/* <ul className="row row-cols-1 row-cols-md-2 mx-auto"> */}
                        {jokeList}
                    </ul>
                </div>  
                <button 
                    className="btn btn-outline-dark btn-sm col-2 load-button" 
                    onClick={moreJokes}
                    >Load More Jokes
                </button> 
            </div>
            
        </>
    )
}

export default Library
