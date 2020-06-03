const express = require('express')

const User=require('../models/user')
const auth = require('../auth/auth')
const login = require('../controller/user')
const router = new express.Router() 


router.post('/signup',login.signup)


router.post('/login',login.login)


router.post('/logout',auth,login.logout)


router.post('/logoutAll',auth,login.logoutAll) 



module.exports = router