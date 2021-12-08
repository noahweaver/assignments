const express = require("express")
const movieRouter = express.Router()
const uuid = require("uuid").v4

//fake data
const movies = [
    {title: "Die Hard", genre:"action", _id: uuid() },
    {title: "The Notebook", genre:"romance", _id: uuid() },
    {title: "Instant Family", genre:"feel-good", _id: uuid() },
    {title: "Paw Patrol", genre:"kids", _id: uuid() },
    {title: "star wars", genre:"sci-fi", _id: uuid() }
]

//Routes
// movieRouter.get("/", (req, res) => {
//     res.send(movies)
// })
// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuid()
//     movies.push(newMovie) //or movies.push(req.body)
//     res.send(`Successfully added ${newMovie.title} to the database`)
// })

movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie) //or movies.push(req.body)
        res.send(`Successfully added ${newMovie.title} to the database`)
    })
//get one
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
   
})
//get by genre
movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

module.exports = movieRouter