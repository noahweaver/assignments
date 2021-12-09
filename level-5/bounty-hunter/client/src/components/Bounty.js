import React, {useState} from 'react'
import BountyForm from './BountyForm'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Bounty(props) {

    const {firstName, lastName, _id, bounty, imgUrl, type} = props
    const [isEditing, setEdit] = useState(false)

    return (
        <div>
            { !isEditing ?
                <>
                    <Card className="bg-danger text-light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imgUrl} />
                    <Card.Body>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                        <Card.Subtitle>$ {bounty}</Card.Subtitle>
                        <Card.Text>{type}</Card.Text>
                        <Button 
                            variant="primary"
                            onClick={() => props.deleteBounty(_id)}
                            >Delete
                        </Button>
                        <Button
                            className="m-3"
                            variant="primary"
                            onClick={() => setEdit(prevIsEdit => !prevIsEdit)}
                            >{props.btnText}
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
                        className=""
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
