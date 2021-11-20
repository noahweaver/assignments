import React, { useState, useEffect } from 'react'
import Target from './Target'

function App () {

    const [hitList, setList] = useState([])
    
    useEffect(() => {
        console.log("useEffect DidMount")
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                setList(data)
            }) 
        }, [])
    
    const targets = hitList.map((target, index) => (<Target key={index} target={target}/>))
    
    return (
            <div>
                {targets}
            </div>
        )

    }


export default App
