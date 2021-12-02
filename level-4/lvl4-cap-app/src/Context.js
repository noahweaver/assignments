import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Context = React.createContext()

//api docs: https://jokeapi.dev/

function ContextProvider(props) {

   const [currentJoke, setJoke] = useState({})
   const [jokesArr, setJokesArr] = useState()
   const [jokeRequestCount, setRequestCount] = useState({
        count1: 0,
        count2: 9
   })

   const count1 = jokeRequestCount.count1
   const count2 = jokeRequestCount.count2

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
//first 10 jokes for library
   function tenJokes(){
       console.log("tenJokes was called")
       fetch("https://v2.jokeapi.dev/joke/Any?idRange=0-9&amount=10")
            .then(response => response.json())
            .then((response) => setJokesArr(response.jokes))
            .then(increment())
            .catch(err => console.log(err))
   }

   //add to state count for fetching 10 jokes
   function increment(count1, count2){
        console.log("increment was called")
        setRequestCount(prevCount => {
             return{
          count1: prevCount.count1 + 10,
          count2: prevCount.count2 + 10
             }
     })
          console.log("count1", count1, "count2", count2)
   }
   //Load more jokes button in <Library />
   function moreJokes(){
          console.log("moreJokes was called")
          console.log("count1", count1, "count2", count2)
          fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${count1}-${count2}&amount=10`)
               .then(increment())
               .then(response => response.json())
               .then((response) => setJokesArr(prevJokes => [...prevJokes].concat(response.jokes)))
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
