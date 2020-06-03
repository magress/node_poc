const express = require('express')
const router = new express.Router()
const auth=require('../auth/auth')
const Order=require('../models/order')

const order = require('../controller/order')


    

router.post('/addcart',auth, order.addtocart)

module.exports = router