const express = require("express")
const characterRouter = express.Router()


characterRouter.use("/", (req, res, next) => {
    req.body = {name: "James Bond"}
    next()
})
characterRouter.use("/", (req, res, next) => {
    req.body = {...req.body, occupation: "Assassin"}
    next()
})
characterRouter.get("/", (req, res, next) => {
    res.send(req.body)
})




module.exports = characterRouter