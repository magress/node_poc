const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose=require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')
const Order= require('../src/models/order')
beforeEach(async ()=>{
    await User.deleteMany()
    await new User(userOne).save()
 })
 beforeEach(async ()=>{
    await Order.deleteMany()
    await new Order(order).save()
 })
const userOneId=new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name:"mike",
    email:"mike@gmail.com",
    password:"hello@123",
    tokens:[{
            token:jwt.sign({_id:userOneId}, process.env.JWT_SECRET)
    }]
}

const order={
    owner:userOne._id,
    email:userOne.email
}

test('addtocart',async ()=>{
    await request(app)
    .post('/update_address')
    .set('Authorization', 'Bearer ' + userOne.tokens[0].token)
    .send({
        "product":"naan",
	    "quantity":10,
	    "price":10
    })
    .expect(200)
})