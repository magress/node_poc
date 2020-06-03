const express = require('express')
const jwt=require('jsonwebtoken')
const mongoose=require('./db/mongoose')

const User = require('./models/user')
const Product = require('./models/product')
const Order = require('./models/order')

const userRouter=require('./routers/user_login_logout')
const productRouter=require('./routers/create_product')
const orderHistoryRouter=require('./routers/order_history')
const inCartRouter=require('./routers/in_cart')
const addCartRouter=require('./routers/addtocart')
const update_addressRouter=require('./routers/update_address')


const auth = require('./auth/auth')


const app = express()
app.use(express.json())



app.use(userRouter)
app.use(productRouter)
app.use(orderHistoryRouter)
app.use(update_addressRouter)
app.use(inCartRouter)
app.use(addCartRouter)



module.exports=app






