const express = require('express')
const bookRouter = express.Router()
const Book = require("../models/book.js")

//get all
bookRouter.get('/', (req, res, next) => {
    Book.find((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

//get all books by an author
bookRouter.get('/:authorId', (req, res, next) => {
    Book.find({author: req.params.authorId}, (err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

//add new book
bookRouter.post('/:authorId', (req, res, next) => {
    req.body.author = req.params.authorId
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

//like a boook
bookRouter.put('/like/:bookId', (req, res, next) => {
    Book.findOneAndUpdate(
        {_id: req.params.bookId},
        {$inc: {likes: 1}}, //can perform multiple updates if needed
        //example
        // {
        //     $inc: {
        //         likes: 1
        //     },
        //     $pull: {
        //         relatedTopics: "some Topic"
        //     }
        // },
        {new: true},
        (err, updatedBook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})

//find books by like range (greater than or equal to 5)
bookRouter.get('/search/bylikes', (req, res, next) => {
    // Book.where('likes').gte(req.query.likeamount).exec()  -> this will allow the user to select the amount
    Book.where('likes').gte(5).exec((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(books)
    })
})

module.exports = bookRouter