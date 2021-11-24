import React, {useContext} from 'react'
// import ThingsContext from './ThingsContext'

function Form(props) {

    // const {ThingsContext} = useContext(ThingsContext)
    //destructure specific properties/values out of ThingsContext? 

    return (
        <form>
            <input 
            name="title"
            placeholder="title"
            // value
            />
            <input 
            name="imgUrl"
            placeholder="imgUrl"
            // value
            />
            <input 
            name="description"
            placeholder="description"
            // value
            />
            <button onClick={props.handleSubmit}>Add to list
            {/* onsubmit added to button*/}
            {/* onSubmit={ThingsContext.handleSubmit} */}
            </button>
        </form>
    )
}

export default Form
