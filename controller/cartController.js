const {Cart} = require("../models/index")
const express = require("express")

class cartController {
    static cart(req, res){
     
        Cart.findAll({where: {cartId: req.body.id}})
        .then(product=>{
           if (product.length === 0) {
                  Cart.create({
                    cartId: req.body.id,
                    quantity: req.body.quantity,
                 })
           }else{
             Cart.update(
               { quantity: Number(product[0].dataValues.quantity) + 1 }, //what going to be updated
               { where: { cartId:  req.body.id}} // where clause
             )  
           }
         });
    }
}

module.exports = cartController;