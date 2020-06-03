const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose=require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')
beforeEach(async ()=>{
    await User.deleteMany()
    await new User(userOne).save()
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



test('signup new user',async ()=>{
    await request(app).post('/signup').send({
        name : "pushpender",
        email:"mymail@gmail.com",
        password:'hello@123'

    }).expect(200)
})

test('login user',async ()=>{
    await request(app).post('/login').send({
        email:userOne.email,
        password:userOne.password

    }).expect(200)
})

test("non-existant user", async ()=>{
    await request(app).post('/login').send({
        email:userOne.email,
        password:"hello123"

    }).expect(400)
})

test('logout user',async ()=>{
    await request(app)
    .post('/logout')
    .set('Authorization', 'Bearer ' + userOne.tokens[0].token)
    .send()
    .expect(200)
})

test('update address',async ()=>{
    await request(app)
    .post('/update_address')
    .set('Authorization', 'Bearer ' + userOne.tokens[0].token)
    .send({
        "city":"pune",
	     "pincode":411015
    })
    .expect(200)
})

