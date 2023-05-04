const express = require('express')
const Route = express.Router();
const productController = require("../controller/productController");
const  upload  = require("../controller/storageController")

       
        Route.post("/",  upload.single('image'), productController.store);
        Route.get("/", productController.store);
module.exports = Route;