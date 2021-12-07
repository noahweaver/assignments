const express = require("express")
const app = express() //server variable

//Middleware
app.use(express.json())

//fake data
    //bountyRouter

//Routes
app.use("/bounties", require("./routes/bountyRouter.js"))


//listen
app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})