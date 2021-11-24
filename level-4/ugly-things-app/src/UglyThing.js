import React, {useContext, useState} from 'react'
import { ThingsContext } from './ThingsContext'
import axios from 'axios'

function UglyThing(props) {

    const {getData} = useContext(ThingsContext)
    const [isEditing, setIsEditing] = useState(false)
    const [updatedThing, setUpdatedThing] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

    const imgStyle ={
        width: 200,
        height: 200
    }
    function handleEdit(id){
        console.log("edit toggle", id)
        setIsEditing(true)
    }
    function submitEdit(id){
        console.log("handleEdit", id)
            axios.put(`https://api.vschool.io/noahweaver/thing/${props.id}`, updatedThing)
                .then(() => getData)
                .catch(err => console.log(err))
            setIsEditing(false)
    }
    function handleDelete(id){
        console.log("handleDelete", id)
        axios.delete(`https://api.vschool.io/noahweaver/thing/${props.id}`)
            .then(() => getData)
            .catch(err => console.log(err))

    }
//   setThingsList(prev => prev.map(thing => id !== thing.id))
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
                <button id={props.id} onClick={handleDelete}>DELETE</button>
                {isEditing === true ? 
                    <form>
                        <input 
                        name="title"
                        value={props.title}
                        onChange={handleChangeEdit}
                        // value
                        />
                        <input 
                        name="imgUrl"
                        value={props.img}
                        onChange={handleChangeEdit}
                        // value
                        />
                        <input 
                        name="description"
                        value={props.description}
                        onChange={handleChangeEdit}
                        // value
                        />
                        <button id={props.id} onClick={submitEdit}>Submit</button>
                        <button onClick={cancelEdit}>Cancel</button>
                    </form> : null}
            </li>
            
        </>
    )
}

export default UglyThing

