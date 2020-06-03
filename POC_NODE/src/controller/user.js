const User = require('../models/user')

//create signup new user

exports.signup = async function (req,res){
    try{
        const user = await new User(req.body)
        const token = await user.generateAuthToken()
        res.send({user,token})

    }
    catch(e){
        res.status(400).send(e)
    }
}

//login user

exports.login =  async function(req,res){
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    }catch(e){
        res.status(400).send()
    }
}

//logout user

exports.logout=async function(req,res){
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    }catch(e){

        res.status(500).send()
    }
}

//logout user from all session
exports.logoutAll=async function (req,res){
    try{
        req.user.tokens=[]
        await req.user.save()

        res.send()
    }catch(e){

        res.status(500).send()
    }
}