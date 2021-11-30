import React, {useState, useEffect} from 'react'
import Jokecard from './Jokecard'
import axios from 'axios'
const Context = React.createContext()

function ContextProvider(props) {

   const [currentJoke, setJoke] = useState({})
   const [jokesArr, setJokesArr] = useState([])

   //DidMount joke
   useEffect(() => {
        newJoke()
   }, [])

   useEffect(() => {
        tenJokes()
   }, [])

   //fetch random joke
   function newJoke() {
       console.log("newJoke was called")
       fetch("https://v2.jokeapi.dev/joke/Any")
            .then(response => response.json())
            .then((response) => {setJoke(response)})
            .catch(err => console.log(err))
   }

   //fetch jokes array and add to state

   //fetch 10 jokes
   function tenJokes(){
       console.log("tenJokes was called")
       fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
            .then(response => response.json())
            .then((response) => setJokesArr([response.jokes]))
            .catch(err => console.log(err))
   }

   function moreJokes(){
    console.log("moreJokes was called")
    fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
         .then(response => response.json())
         .then((response) => setJokesArr(prevJokes => [...prevJokes, response.jokes]))
         .catch(err => console.log(err))
   }

   const jokeList = jokesArr.map((joke) => 
   <Jokecard 
       key={joke.id} 
       setup={joke.setup} 
       delivery={joke.delivery} 
       joke={joke.joke}
   />)

    return (
        // clean up values list when finished, remove any unused values
       <Context.Provider 
            value={{
                currentJoke,
                setJoke,
                newJoke,
                jokesArr,
                tenJokes, 
                moreJokes,
                jokeList
        }}>
           {props.children}
       </Context.Provider>
    )
}

export {ContextProvider, Context}
