// const {Cart} = require("../models/index")
// const express = require("express")

// class incrementController {
//     static increment(req, res){
//       console.log(req.body);
//         Cart.findAll({where: {cartId: req.body.id}})
//         .then(product=>{
//             if(req.body.value === "increment"){
//               Cart.update(
//                 { quantity: Number(product[0].dataValues.quantity) + 1 }, //what going to be updated
//                 { where: { cartId:  req.body.id}} // where clause
//               );
//              }
//         }) 
//     }
// }

// module.exports = incrementController;
