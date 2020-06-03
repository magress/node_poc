const express = require('express')

const User=require('../models/user')
const auth = require('../auth/auth')
const login = require('../controller/user')
const router = new express.Router() 


//to add address 
router.post('/update_address',auth,async (req,res)=>{
    
    const user = await User.updateOne({_id:req.user.id},{$push:{"address":{"city":req.body.city,"pincode":req.body.pincode}}})
  
    res.send(user)

})

module.exports = router