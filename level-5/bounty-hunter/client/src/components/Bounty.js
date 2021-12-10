import React, {useState} from 'react'
import BountyForm from './BountyForm'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Bounty(props) {

    const {
        firstName, 
        lastName, 
        _id, 
        bounty, 
        imgUrl, 
        type, 
        deleteBounty, 
        btnText
    } = props
        
    const [isEditing, setEdit] = useState(false)

    return (
        <div>
            { !isEditing ?
                <>
                    <Card 
                        className="bg-danger text-light" 
                        style={{ width: '18rem'}}>
                    <Card.Img 
                        style={{height: '400px', width: '286px'}} 
                        variant="top" 
                        src={imgUrl} />
                    <Card.Body>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                        <Card.Subtitle>$ {bounty}</Card.Subtitle>
                        <Card.Text>{type}</Card.Text>
                        <Button 
                            variant="primary"
                            onClick={() => deleteBounty(_id)}
                            >Delete
                        </Button>
                        <Button
                            className="m-3"
                            variant="primary"
                            onClick={() => setEdit(prevIsEdit => !prevIsEdit)}
                            >{btnText}
                        </Button>
                    </Card.Body>
                </Card>
              </>   
                :
                <Card>
                <Card.Body>
                    <BountyForm
                        firstName={firstName}
                        lastName={lastName}
                        _id={_id}
                        bounty={bounty}
                        imgUrl={imgUrl}
                        btnText="Submit Edit"
                        submit={props.editBounty}
                        toggleEdit={setEdit}
                    /> 
                    <Button
                        onClick={() => setEdit(prevIsEdit => !prevIsEdit)}
                    >Close
                    </Button>
                </Card.Body>
                </Card>
            }
        </div>
    )
}

export default Bounty
