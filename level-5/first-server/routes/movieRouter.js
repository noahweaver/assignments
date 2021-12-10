const express = require("express")
const movieRouter = express.Router()
const Movie = require('../models/movie')
// const uuid = require("uuid").v4 

//Routes
movieRouter.route("/")
    .get((req, res, next) => {
        Movie.find((err, movies) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(movies)
        })
        
    })
    .post((req, res, next) => {
        const newMovie = new Movie(req.body)
        newMovie.save((err, savedMovie) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedMovie)
        })
    })
//get one
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if (!foundMovie){
        const err = new Error(`The item with id ${movieId} was not found.`)
        res.status(500)
        return next(err)
    }
    res.status(200).send(foundMovie)
})
//get by genre
movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find({genre: req.query.genre},(err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
        })
})
//Delete One
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({_id: req.params.movieId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted ${deletedItem.title} from the database`)
    })
})
//update
movieRouter.put("/:movieId", (req, res, next) => {
   Movie.findOneAndUpdate(
       {_id: req.params.movieId}, //find this one to update
       req.body, //update the object with this data
       {new: true}, //send back the updated version
       (err, updatedMovie) => {
           if(err){
               res.status(500)
               return next(err)
           }
           return res.status(201).send(updatedMovie)
       }
    )
})


module.exports = movieRouter