const express = require('express')
const Route = express.Router();
const cart = require("./cart");
const product = require("./product");
const indexController = require("../controller/indexController");
const productFilterController = require("../controller/productFilterController");
const itemProductController = require("../controller/itemProductController");
const cartController = require("../controller/cartController");
const getCartController = require("../controller/getCartController");
const productRemoveController = require("../controller/removeProduct");
// const incrementController = require('../controller/incrementController');
// const decrementController = require('../controller/decrementController');

Route.get("/", indexController.index);
Route.use("/product", product);
Route.use("/filter:brand", productFilterController.filter);
Route.use("/product/item:idproduct", itemProductController.item);
Route.use("/cart", cartController.cart);
Route.use("/getCart", getCartController.getCart);
Route.use("/delete", productRemoveController.remove);
// Route.use("/increment", incrementController.increment);
// Route.use("/decrement", decrementController.decrement);

module.exports = Route;

