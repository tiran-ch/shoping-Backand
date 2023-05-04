const express = require('express')
const Route = express.Router();
const getCartController = require("../controller/getCartController");

Route.get("/", getCartController.getCart);

module.exports = Route;