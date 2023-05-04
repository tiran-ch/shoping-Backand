const express = require('express')
const Route = express.Router();
const cartController = require("../controller/cartController");

Route.post("/", cartController.cart);

module.exports = Route;