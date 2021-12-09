import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
import BountyForm from './components/BountyForm'

function App() {

    const [bounties, setBounties] = useState([])

    useEffect(() => {
        getBounties()
    }, [])

    function getBounties(){
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }
    function addBounty(newBounty){
        axios.post('/bounties', newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }
    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`, )
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }
    function editBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
    }
    
    return (
        <div>
            <div>
                <BountyForm 
                    btnText="Post Bounty"
                    submit={addBounty}
                />
            <div className="container-fluid d-flex flex-row justify-content-md-evenly" >
                {bounties.map(bounty => 
                <Bounty 
                    {...bounty}
                    key={bounty.firstName}
                    btnText="edit"
                    deleteBounty={deleteBounty}
                    editBounty={editBounty}
                />
                )}
            </div>
            
                
                </div>
        </div>
    )
}

export default App
