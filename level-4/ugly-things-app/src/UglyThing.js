import React, {useContext, useState} from 'react'
import { ThingsContext } from './ThingsContext'

function UglyThing(props) {

    const {handleDelete, submitEdit} = useContext(ThingsContext)
    const [isEditing, setIsEditing] = useState(false)
    const [updatedThing, setUpdatedThing] = useState({
        title: props.title,
        imgUrl: props.imgUrl,
        description: props.description
    })

    const imgStyle ={
        width: 200,
        height: 200
    }
    function handleEdit(id){
        console.log("edit toggle", id)
        setIsEditing(true)
    }
    function handleChangeEdit(event){
        console.log("handleChangeEdit")
        event.preventDefault()
        const {name, value} = event.target
        setUpdatedThing(input => ({...input, [name]: value}))
    }
    function cancelEdit(id){
        console.log("cancelEdit")
        setIsEditing(false)
    }

    return (
        <>
            <li>
                <h2>{props.title}</h2>
                <img style={imgStyle} src={props.img} alt=""/>
                <p>{props.description}</p>
                {isEditing === false ? <button id={props.id} onClick={handleEdit}>EDIT</button> : null}
                <button onClick={() => handleDelete(props.id)}>DELETE</button>
                {isEditing === true ? 
                    <form>
                        <input 
                        name="title"
                        value={updatedThing.title}
                        onChange={handleChangeEdit}
                        />
                        <input 
                        name="imgUrl"
                        value={updatedThing.imgUrl}
                        onChange={handleChangeEdit}
                        />
                        <input 
                        name="description"
                        value={updatedThing.description}
                        onChange={handleChangeEdit}
                        />
                        <button onClick={() => {
                            submitEdit(props.id, updatedThing)
                            setIsEditing(false)
                        }}>Submit</button>
                        <button onClick={cancelEdit}>Cancel</button>
                    </form> : null}
            </li>
            
        </>
    )
}

export default UglyThing

