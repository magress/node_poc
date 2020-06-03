const mongoose =require('mongoose')
const validator= require('validator')

const Product = mongoose.model('Product',{
    category: {
        type:String,
        required:true,
        trim:true,
        lowercase: true
    },
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase: true   
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    quantity:{
        type:Number,
        validate(value){
            if(value<0){
                throw new Error('OUT of Stock')
            }
        }
    },
    price:{
        type:Number
    }
})

module.exports = Product