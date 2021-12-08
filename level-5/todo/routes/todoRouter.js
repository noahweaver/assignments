const express = require("express")
const todoRouter = express.Router()
const uuid = require("uuid").v4

const todoList = [
    {
        name: "To do 1",
        description: "To do description 1",
        imageUrl: "https://images.unsplash.com/photo-1627850604058-52e40de1b847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG8lMjBkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuid()
    },
    {
        name: "To do 2",
        description: "To do description 2",
        imageUrl: "https://images.unsplash.com/photo-1627850604058-52e40de1b847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG8lMjBkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuid()
    },
    {
        name: "To do 2",
        description: "To do description 2",
        imageUrl: "https://images.unsplash.com/photo-1627850604058-52e40de1b847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG8lMjBkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuid()
    },
]

todoRouter.route("/")
    .get((req, res, next) => {
        res.send(todoList)
    })
    .post((req, res, next) => {
        const newItem = req.body
        newItem._id = uuid()
        todoList.push(newItem)
        res.send(`Successfully added ${newItem.name} to the list`)
    })

todoRouter.route("/:todoId")
    .get((req, res, next) => {
        const todoId = req.params.todoId
        const foundTodo = todoList.find(item => item._id === todoId)
        res.send(foundTodo)
    })
    .put((req, res, next) => {
        const updatedObject = req.body
        const todoId = req.params.todoId
        const todoIndex = todoList.findIndex(item => item._id === todoId)
        const updatedTodo = Object.assign(todoList[todoIndex], updatedObject)
        res.send(updatedTodo)
    })
    .delete((req, res, next) => {
        const todoId = req.params.todoId
        const todoIndex = todoList.findIndex(item => item._id === todoId)
        todoList.splice(todoIndex, 1)
        res.send(`The item was successfully deleted`)
    })

module.exports = todoRouter