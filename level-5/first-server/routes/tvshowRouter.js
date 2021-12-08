const express = require("express")
const tvshowRouter = express.Router()
const uuid = require("uuid").v4

//fake data
const tvshows = [
    {title: "The Office", _id: uuid()},
    {title: "Dragon Ball Super", _id: uuid()},
    {title: "The Blacklist", _id: uuid()},
    {title: "NCIS", _id: uuid()},
    {title: "Sports Center", _id: uuid()}
]

//routes
// tvshowRouter.get("/", (req, res) => {
//     res.send(tvshows)
// })
// tvshowRouter.post("/", (req, res) => {
//     const newtvshow = req.body
//     newtvshow._id = uuid()
//     tvshows.push(newtvshow) //or tvshows.push(req.body)
//     res.send(`Successfully added ${newtvshow.title} to the database`)
// })

tvshowRouter.route("/")
    .get((req, res) => {
        res.send(tvshows)
    })
    .post((req, res) => {
        const newtvshow = req.body
        newtvshow._id = uuid()
        tvshows.push(newtvshow) //or tvshows.push(req.body)
        res.send(`Successfully added ${newtvshow.title} to the database`)
    })

//get one
tvshowRouter.get("/:tvshowId", (req, res) => {
    const tvshowId = req.params.tvshowId
    const foundShow = tvshows.find(show => show._id === tvshowId )
    res.send(foundShow)
})



module.exports = tvshowRouter