const express = require("express")
const app = express()
const morgan = require("morgan")

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/todo", require("./routes/todoRouter"))


//listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
