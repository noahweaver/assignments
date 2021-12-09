import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function BountyForm(props) {

    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        type: props.type ||  "",
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
            <Form className={props.className} onSubmit={handleSubmit}>
                    <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        name="firstName"
                        type='text' 
                        placeholder="First Name" 
                        value={inputs.firstName}
                        onChange={handleChange}
                        className="mb-3">
                    </Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        name="lastName"
                        type='text' 
                        placeholder="Last Name" 
                        value={inputs.lastName}
                        onChange={handleChange}
                        className="mb-3">
                    </Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Bounty</Form.Label>
                    <Form.Control 
                        name="bounty"
                        type='number' 
                        placeholder="$Bounty" 
                        value={inputs.bounty}
                        onChange={handleChange}
                        className="mb-3">
                    </Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control 
                        name="imgUrl"
                        type='text' 
                        placeholder="Img Url" 
                        value={inputs.imgUrl}
                        onChange={handleChange}
                        className="mb-3"> 
                    </Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Jedi or Sith</Form.Label>
                    <Form.Select 
                        aria-label="Jedi" 
                        name="type"
                        value={inputs.type}
                        onChange={handleChange}
                        className="mb-3">                        
                        <option>Select Type</option>
                        <option value="Jedi">Jedi</option>
                        <option value="Sith">Sith</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group>
                       <Button className="mb-3" variant="primary" type='submit'>
                        {props.btnText}
                    </Button> 
                    </Form.Group>
                    
               
            </Form>
    )
}

export default BountyForm
