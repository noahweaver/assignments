//First Express Server
const express = require("express")
const app = express () //This is the server variable

//Middleware 
    //1. path (optional: if no path listed, the middleware will fire on every request)
    //2. function
app.use(express.json())  //looks for a reqest body and turns it into 'req.body'


//Fake Data
    //located in tvshowRouter and movieRouter



    
//Routes
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))
app.use("/bond", require("./routes/characterRouter.js"))
        //1. Endpoint (mount, path)
        //2. Callback Function (request, response) => {}




//tell the server to always listen
    //1: port  2. Callback Function
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})