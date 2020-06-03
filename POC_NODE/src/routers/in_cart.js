const express = require('express')
const router = new express.Router()
const auth=require('../auth/auth')
const Order=require('../models/order')
const User=require('../models/user')



//to show the present item in the cart
router.get('/cart',auth, async (req,res)=>{
    try{
        order= await Order.find({owner:req.user._id,status:"In Cart"})
        
        res.status(200).send(order)
    }catch(e){
        res.status(400).send()
    }
   
    
})

module.exports = router