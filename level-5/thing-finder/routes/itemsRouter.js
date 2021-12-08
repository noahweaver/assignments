const express = require("express")
const itemsRouter = express.Router()

//fake data
const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

//routes
//get all
itemsRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})

//get items by type
//localhost:9000/items/filter/type?type=<type>
itemsRouter.get("/filter", (req, res) => {
    const type = req.query.type
    const filteredItems = inventoryItems.filter(item => item.type === type)
    res.send(filteredItems)
})

module.exports = itemsRouter