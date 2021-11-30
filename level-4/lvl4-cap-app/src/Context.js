import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Context = React.createContext()

function ContextProvider(props) {

   const [currentJoke, setJoke] = useState({})
   const [jokesArr, setJokesArr] = useState()


   //enable warning when complete
   //convert to modal?
//    useEffect(() => {
//         alert("WARNING: Proceed with caution. There are many dark and potentially offensive jokes used in this app. No offense is meant, but if you are easily offended you might not want to proceed.")
//    }, [])
   
   //DidMount joke for home page
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

   //fetch 10 jokes
   function tenJokes(){
       console.log("tenJokes was called")
       fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
            .then(response => response.json())
            .then((response) => setJokesArr(response.jokes))
            .catch(err => console.log(err))
   }

 //fetch jokes array and add to state
 //need to fix repeating jokes bug
   function moreJokes(){
    console.log("moreJokes was called")
    fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
         .then(response => response.json())
         .then((response) => setJokesArr(prevJokes => [...prevJokes].concat(response.jokes))
         )
         .catch(err => console.log(err))
   }


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
        }}>
           {props.children}
       </Context.Provider>
    )
}

export {ContextProvider, Context}
