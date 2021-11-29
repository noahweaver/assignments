import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Context = React.createContext()

function ContextProvider(props) {

   const [currentJoke, setJoke] = useState({
       setup: "Placeholder setup",
       punchline: "Placeholder punchline",
       type: "Placeholder type"

   })

   useEffect(() => {
        newJoke()
   }, [])


   //getData

   function newJoke(){
       console.log("newJoke was called")
        // fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        //         "x-rapidapi-key": "8f54ecd662msh6f4107241659e95p1e9455jsn278bae242e66"
        //     }
        // })
        //     .then(response => {
        //         response.json()
        //     console.log(response);
        // })
        // .catch(err => {
        //     console.error(err);
        // });
   }

//  .then(() => {
//             setJoke(body => ({...body}))
//         })

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
