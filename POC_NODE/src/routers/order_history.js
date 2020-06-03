const express = require('express')
const router = new express.Router()
const auth=require('../auth/auth')
const Order=require('../models/order')
const User=require('../models/user')

//to show previous order history 
router.get('/order_history',auth, async (req,res)=>{
    try{
        order= await Order.find({owner:req.user._id,status:"Order Placed"})
        
        res.status(200).send(order)
    }catch(e){
        res.status(400).send()
    }
   
    
})





module.exports = router