const { Cart } = require("../models/index")
const express = require('express')

class productRemoveController {   
    static remove(req, res){
        Cart.destroy({where: {cartId: req.body.id} })
    }
};



module.exports = productRemoveController;