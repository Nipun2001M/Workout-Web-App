const express =require('express');
const { loginUser, signupUser } = require('../controllers/Usercontroller');
const router =express.Router()

router.post('/login',loginUser)

router.post('/signup',signupUser)





module.exports =router;