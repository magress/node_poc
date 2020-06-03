const express = require('express')
const router = new express.Router()
const Product=require('../models/product')
const product = require('../controller/product')

//to create product
router.post('/products',product.product)


// to decrease quantity
router.post('/product_quantity',product.product_quantity)


module.exports = router