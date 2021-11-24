import React, {useState, useEffect} from 'react'
const ThingsContext = React.createContext()

function ThingsContextProvider(props) {

    const [newThing, setNewThing] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })
    const [isEditing, setIsEditing] = useState(false)
    const [thingsList, setThingsList] = useState([])
    

    //do I need a handle changer if I don't care to see validation text on screen?

    function handleSubmit(event) {
        console.log("handleSubmit")
        //submit form value
        //post request
    }

   function handleEdit(id){
    console.log("handleEdit")
        //edit toggle
        //if isEditing is true, show forms
        //put request
    }
    function handleDelete(id){
        console.log("handleDelete")
        //delete item
        //delete request 
    }

    //function to save edited thing
        //put request
    
    function getData(){
        fetch("https://api.vschool.io/noahweaver/thing")
            .then(response => response.json())
            .then(data => setThingsList(data))
    }

    useEffect(() => {
        getData()
        }, [])

    return (
        <ThingsContext.Provider value={{thingsList, newThing, isEditing, handleDelete, handleEdit, handleSubmit}}>
            {props.children}
        </ThingsContext.Provider>
    )
}

export {ThingsContextProvider, ThingsContext}

