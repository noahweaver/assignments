//First Express Server
const express = require("express")
const app = express () //This is the server variable
const morgan = require("morgan")
const mongoose = require("mongoose")

//Middleware 
    //1. path (optional: if no path listed, the middleware will fire on every request)
    //2. function
app.use(express.json())  //looks for a reqest body and turns it into 'req.body'
app.use(morgan('dev')) //logs requests to the console

//Connect to DB
mongoose.connect('mongodb://localhost:27017/firstserverdb', 
    () => console.log("Connected to the Database")
)
//depracations in video but not listed on documentation: https://mongoosejs.com/docs/deprecations.html
   // {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }, 


//Routes
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))
app.use("/bond", require("./routes/characterRouter.js"))
        //1. Endpoint (mount, path)
        //2. Callback Function (request, response) => {}

//Error Handling Middleware
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({err: err.message})
})


//tell the server to always listen
    //1: port  2. Callback Function
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})