
const {Cart} = require("../models/index")
const express = require("express")

class getCartController {
    static getCart(req, res){
        Cart.findAll()
        .then(product =>{
            res.send(product)
        })
    }
}

module.exports = getCartController;