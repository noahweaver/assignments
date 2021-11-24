import React, {useContext} from 'react'
import {ThingsContext} from './ThingsContext'

function Form(props) {

    const {handleSubmit, handleChange} = useContext(ThingsContext)
    return (
        <form>
            <input 
                name="title"
                placeholder="title"
                onChange={handleChange}
            />
            <input 
                name="imgUrl"
                placeholder="imgUrl"
                onChange={handleChange}
            />
            <input 
                name="description"
                placeholder="description"
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add to list</button>
        </form>
    )
}

export default Form
