const mongoose =require('mongoose')

mongoose.connect(process.env.URL_DB,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
})






