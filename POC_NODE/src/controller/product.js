const Product = require('../models/product')

// add product in the inventory
exports.product=  (req,res)=>{
    const product = new Product(req.body)

    product.save().then( ()=> {
        res.send(product)

    }).catch(()=>{
        res.status(400).send(e)

    })
}


//decrease product quantity after user add to cart

exports.product_quantity= async (req,res)=>{
    const product=await Product.updateOne({_id:req.body.id},{$inc:{"quantity":-1 }})
    res.send(product)
}