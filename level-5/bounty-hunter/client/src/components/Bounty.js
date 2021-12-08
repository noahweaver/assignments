import React, {useState} from 'react'
import BountyForm from './BountyForm'

function Bounty(props) {

    const {firstName, lastName} = props
    const [isEditing, setEdit] = useState(false)

    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <button onClick={() => setEdit()}>{props.btnText}</button>
        </div>
    )
}

export default Bounty
