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
        //submit form value
        //post request
    }

   function handleEdit(id){
        //edit toggle
        //if isEditing is true, show forms
        //put request
    }
    function deleteThing(id){
        //delete item
        //delete request 
    }

    //function to save edited thing
        //put request

    

    //fetch API data from https://api.vschool.io/<yourname>/thing
    //push to state

    // useEffect(() => {
    //     fetch("https://api.vschool.io/noahweaver/thing")
    //         .then(response => response.json())
    //         .then(data => (setThingsList(
    //                 data
    //             ))
                
    //     )
    // })

    return (
        <ThingsContext.Provider onSubmit={handleSubmit} onClick={handleEdit, deleteThing} value={{thingsList, newThing, isEditing}}>
            {/* value needs to be things, methods */}
            {props.children}
        </ThingsContext.Provider>
    )
}

export {ThingsContextProvider, ThingsContext}

