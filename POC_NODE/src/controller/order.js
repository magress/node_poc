const Order = require('../models/order')

//ADD ITEM TO THE CART

exports.addtocart = async (req,res)=>{
    const order= await Order.findOne({owner:req.user.id})
    console.log(order)
    if(!order)
    {
        const order1= await new Order({
            owner:req.user._id,
            email:req.user.email
            
        })

        await order1.save()
        console.log(order1)
    }
    
    const order2 = await Order.updateOne({owner:req.user.id},{$push:{"cart":{"product":req.body.product,"quantity":req.body.quantity,"price":req.body.price}}})
    console.log(order2)
    await res.send(order2)
}