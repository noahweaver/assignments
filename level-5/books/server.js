const express = require("express")
const app = express ()
const morgan = require('morgan')
const mongoose = require("mongoose")

//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect to db
mongoose.connect('mongodb://localhost:27017/books-db', 
    () => console.log("Connected to the Database")
)

//routes
app.use('/books', require('./routes/bookRouter.js'))
app.use('/authors', require('./routes/authorRouter.js'))

//Error Handling Middleware
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({err: err.message})
})

//listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})