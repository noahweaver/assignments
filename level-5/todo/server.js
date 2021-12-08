const express = require("express")
const app = express()

//middleware
app.use(express.json())

//routes
app.use("/todo", require("./routes/todoRouter"))


//listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
