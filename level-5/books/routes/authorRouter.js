const express = require('express')
const authorRouter = express.Router()
const Author = require("../models/author.js")

//get all
authorRouter.get('/', (req, res, next) => {
    Author.find((err, authors) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})

//add new author
authorRouter.post('/', (req, res, next) => {
    const newAuthor = new Author(req.body)
    newAuthor.save((err, savedauthor) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedauthor)
    })
})

// get author(s) by search term
//$ methods are found in MongoDB docs
authorRouter.get('/search', (req, res, next) => {
    const { author } = req.query
    const pattern = new RegExp(author)
    Author.find(
        { name: {$regex: pattern, $options: 'i'} }, //'i' is the option for case insensitivity
        (err, authors) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(authors)
        }) 
})

module.exports = authorRouter