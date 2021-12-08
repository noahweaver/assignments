const express = require("express")
const app = express() //server variable
const morgan = require("morgan")

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//fake data
    //bountyRouter

//Routes
app.use("/bounties", require("./routes/bountyRouter.js"))


//listen
app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})