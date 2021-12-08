const express = require("express")
const app = express()

//middleware
app.use(express.json())

//fake data
    //itemsRouter.js

//routes
app.use("/items", require("./routes/itemsRouter.js"))

//listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})