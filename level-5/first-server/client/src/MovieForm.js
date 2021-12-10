import React, {useState} from 'react'

function MovieForm(props) {
    const initInputs = {title: props.title || "", genre: props.genre || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(event){
        const {name, value} = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    function handleSubmit(event){
        event.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name="title" 
                value={inputs.title} 
                onChange={handleChange} 
                placeholder="title" 
            />
            <select 
                    // onChange={handleFilter} 
                    onChange={handleChange}
                    className="filter-form"
                    name="genre"
                    >
                    <option>Select</option>
                    <option value="action">Action</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                </select>
            <button>{props.btnText}</button>
        </form>
    )
}

export default MovieForm
