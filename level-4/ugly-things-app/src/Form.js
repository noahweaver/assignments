import React, {useContext} from 'react'
import {ThingsContext} from './ThingsContext'

function Form(props) {

    const {handleSubmit, handleChange} = useContext(ThingsContext)
    //destructure specific properties/values out of ThingsContext? 

    return (
        <form>
            <input 
                name="title"
                placeholder="title"
                onChange={handleChange}
                // value
            />
            <input 
                name="imgUrl"
                placeholder="imgUrl"
                onChange={handleChange}
                // value
            />
            <input 
                name="description"
                placeholder="description"
                onChange={handleChange}
                // value
            />
            <button onClick={handleSubmit}>Add to list</button>
        </form>
    )
}

export default Form
