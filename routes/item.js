const express = require('express')
const Route = express.Router();
const itemProductController = require("../controller/itemProductController")

Route.get("/", itemProductController.item);


module.exports = Route;