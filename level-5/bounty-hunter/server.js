const express = require("express")
const app = express() //server variable
const morgan = require("morgan")
const mongoose = require("mongoose")

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Connect to DB
mongoose.connect('mongodb://localhost:27017/bountiesdb',
    () => console.log("Connected to the database")
)

//Routes
app.use("/bounties", require("./routes/bountyRouter.js"))

//Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({err: err.message})
})

//Listen
app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})