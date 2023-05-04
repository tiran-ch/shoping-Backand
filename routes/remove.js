const express = require('express')
const Route = express.Router();
const productRemoveController = require("../controller/removeProduct")

Route.post("/", productRemoveController.remove);


module.exports = Route;