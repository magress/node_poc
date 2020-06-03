const request = require('supertest')
const app = require('../src/app')
const Product = require('../src/models/product')


beforeEach(async ()=>{
   await Product.deleteMany()
})

test('add product',async ()=>{
    await request(app).post('/products').send({
        
        "category":"breakfast",
        "name":"bread",
        "description":"white flour bread",
        "quantity":100,
        "price":25
        

    }).expect(200)
})