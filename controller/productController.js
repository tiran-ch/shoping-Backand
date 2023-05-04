const { Product } = require("../models/index")
const express = require('express')

class productController {   
    static store (req, res){

        console.log(req.file)
        if (req.body.brand !== "" & req.body.model !== ""  & req.body.about !== "" & req.file !== undefined) {
                Product.create({
                brand: req.body.brand,
                model: req.body.model,
                product: "Phone",
                about: req.body.about,
                images: req.file.filename,
                price: "5000%",
            }).catch(err=>{
                if(err){
                    console.log(err);
                }
            });
        }
        
        Product.findAll()
        .then(product =>{
            res.send(product)
        })
        
    }
};



module.exports = productController;