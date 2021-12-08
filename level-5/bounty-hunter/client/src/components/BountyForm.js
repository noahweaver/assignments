import React, {useState} from 'react'

function BountyForm(props) {

    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        type: props.type || "",
        bounty: props.bounty
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    function handleSubmit(e){
        e.preventDefault()

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
            <button>{props.btnText}</button>
        </form>
    )
}

export default BountyForm
