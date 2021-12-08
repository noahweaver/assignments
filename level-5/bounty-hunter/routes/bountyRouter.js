const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid").v4


const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bounty: 100000,
        type: "jedi",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        bounty: 10000000,
        type: "sith",
        _id: uuid()
    },
    {
        firstName: "Yo",
        lastName: "da",
        living: true,
        bounty: 0,
        type: "jedi",
        _id: uuid()
    }
]

//Routes
bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`successfully added ${newBounty.firstName} ${newBounty.lastName} to the database`)
    })

bountyRouter.route("/:bountyId")
    .get((req, res, next )=> {
        const bountyId = req.params.bountyId
        const filteredBounties = bounties.filter(bounty => bounty._id === bountyId)
        res.send(filteredBounties)
    })
    .delete((req, res, next) => {
        const bounty = req.body
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(`successfully removed ${bounty.firstName} ${bounty.lastName} from the database`)
    })
    .put((req, res, next) => {
        const updatedObject = req.body
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
        res.send(updatedBounty)
    })



module.exports = bountyRouter