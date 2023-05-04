const { Product } = require("../models/index")
const express = require('express')

class productFilterController {   
    static filter (req, res){
        const brand = req.params.brand;

        console.log(brand);
        Product.findAll({where: {brand: brand}})
        .then(product =>{
          res.send(product)
        })
    }
};



module.exports = productFilterController;