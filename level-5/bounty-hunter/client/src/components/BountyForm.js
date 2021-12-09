import React, {useState} from 'react'

function BountyForm(props) {

    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        type: props.type || "",
        bounty: props.bounty || 0,
        imgUrl: props.imgUrl || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='firstName' 
                value={inputs.firstName} 
                onChange={handleChange} 
                placeholder="First Name"
            />
            <input 
                type='text' 
                name='lastName' 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder="Last Name"
            />
            {/* money sign for placeholder */}
            <input 
                type='number' 
                name='bounty' 
                value={inputs.bounty} 
                onChange={handleChange} 
                placeholder='$Bounty'
            />
            {/* change to dropbox */}
            <input 
                type='text' 
                name='type' 
                value={inputs.type} 
                onChange={handleChange} 
                placeholder="Jedi or Sith"
            />
            <input 
                type='text' 
                name='imgUrl' 
                value={inputs.imgUrl} 
                onChange={handleChange} 
                placeholder="Image URL"
            />
            <button>{props.btnText}</button>
        </form>
    )
}

export default BountyForm
