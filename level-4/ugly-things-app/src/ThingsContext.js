import React, {useState, useEffect} from 'react'
import axios from 'axios'
const ThingsContext = React.createContext()

function ThingsContextProvider(props) {

    const [newThing, setNewThing] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })
    const [thingsList, setThingsList] = useState([])
    

    useEffect(() => {
        getData()
    }, [])

    //handlechange puts form data into newThing
    function handleChange(event){
        console.log("handleChange")
        event.preventDefault()
        const {name, value} = event.target
        setNewThing(input => ({...input, [name]: value}))
    }
    function handleSubmit(event) {
        console.log("handleSubmit")
        event.preventDefault()
        axios.post("https://api.vschool.io/noahweaver/thing/", newThing)
            .then(() => getData())
            .catch(err => console.log(err))
        //clear the form
            //update state?
    }
    function getData(id){
        fetch("https://api.vschool.io/noahweaver/thing/")
            .then(response => response.json())
            .then(data => setThingsList(() => [...data]))
    }

    return (
        <ThingsContext.Provider value={{thingsList, newThing, handleSubmit, handleChange, setThingsList}}>
            {props.children}
        </ThingsContext.Provider>
    )
}

export {ThingsContextProvider, ThingsContext}

