const express = require('express')
const Route = express.Router();
const productFilterController = require("../controller/productFilterController");

Route.get("/", productFilterController.filter);


module.exports = Route;