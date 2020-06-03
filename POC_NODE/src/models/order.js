const mongoose =require('mongoose')
const validator= require('validator')

const Order = mongoose.model('Order',{
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    total:{
        type:Number
    },
    status:{
        type:String,
        default:"In Cart"
    },
    cart:[{
        product:{
            type:String 
        },
        quantity:{
            type:Number
        },
        price:{
            type:Number
        }
        
    }]
    
})

module.exports = Order