import React, {useContext} from 'react'
import { ThingsContext } from './ThingsContext'

function UglyThing(props) {

    const {handleDelete, handleEdit} = useContext(ThingsContext)

    const imgStyle ={
        width: 200,
        height: 200
    }


    return (
        <>
            <li>
                <h2>{props.title}</h2>
                <img style={imgStyle} src={props.img} alt=""/>
                <p>{props.description}</p>
                <button onClick={handleEdit}>EDIT</button>
                <button onClick={handleDelete}>DELETE</button>
            </li>
            {/* conditional rendering form for edit? */}
        </>
    )
}

export default UglyThing
