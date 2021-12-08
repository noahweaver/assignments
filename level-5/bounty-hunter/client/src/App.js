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

    return (
        <div>
            <div>
                <BountyForm 
                    btnText="Post Bounty"
                />
            {bounties.map(bounty => 
                <Bounty 
                    {...bounty}
                    key={bounty.firstName}
                    btnText="edit"
                />
                )}
                </div>
        </div>
    )
}

export default App
