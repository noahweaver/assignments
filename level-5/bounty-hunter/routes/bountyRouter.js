const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid").v4


const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bounty: 10000000,
        type: "sith",
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
    // .put
    // .delete



module.exports = bountyRouter