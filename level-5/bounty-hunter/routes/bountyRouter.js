const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')

//Routes
//("/")
bountyRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(302).send(savedBounty)
        })
    })
//('/:bountyId') routes
bountyRouter.route("/:bountyId")
    .get((req, res, next )=> {
        Bounty.find({_id: req.params.bountyId}, 
            (err, bounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(bounty)
            })
    })
    .delete((req, res, next) => {
        Bounty.findOneAndDelete({_id: req.params.bountyId},
            (err, bounty) =>{
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`successfully removed ${bounty.firstName} ${bounty.lastName} from the database`)
            })
    })
    .put((req, res, next) => {
        Bounty.findOneAndUpdate(
            {_id: req.params.bountyId},
            req.body,
            {new: true},
            (err, updatedBounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
            })
    })



module.exports = bountyRouter