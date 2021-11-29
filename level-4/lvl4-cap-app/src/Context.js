import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Context = React.createContext()

function ContextProvider(props) {

   const [currentJoke, setJoke] = useState({})

   //DidMount joke
   useEffect(() => {
        newJoke()
   }, [])

   //fetch random joke
   function newJoke() {
       console.log("newJoke was called")
       fetch("https://v2.jokeapi.dev/joke/Any")
            .then(response => response.json())
            .then((response) => {setJoke(response)})
            .catch(err => console.log(err))
   }
   
    return (
       <Context.Provider 
            value={{
                currentJoke,
                setJoke,
                newJoke
        }}>
           {props.children}
       </Context.Provider>
    )
}

export {ContextProvider, Context}
