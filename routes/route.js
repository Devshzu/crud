const express = require('express')
const route = express.Router();
const getController = require('../controller/getController')
const addController = require('../controller/addController')
const removeController = require('../controller/removeController')
const changeController = require('../controller/changeController')
const getperController = require("../controller/getpertController")

route.get('/getAll', getController)
route.get('/get/:id', getperController)
route.post('/add', addController)
route.delete('/remove/:id', removeController)
route.put('/change/:id', changeController)

module.exports = route