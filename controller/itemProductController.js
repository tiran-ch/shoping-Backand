const {Product} = require("../models/index")
const express = require("express")

class itemProductController{
    static item(req, res){
        const id = req.params.idproduct;


        Product.findAll({where: {id: id}})
        .then(product =>{
          res.send(product)
        })
    
    }
}

module.exports = itemProductController;

