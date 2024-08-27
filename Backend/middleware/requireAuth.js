const jwt=require('jsonwebtoken')
const userModel = require('../models/userModel')
const requireAuth=async(req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){
        return res.status('authorization token need')
    }
    const token=authorization.split(' ')[1]
    try{
        const {_id}=jwt.verify(token,process.env.SECRET);
        //we set user id with reqest in middleware then i next part it goes to controllers they can use it as user(can any name)
        req.user=await userModel.findOne({_id}).select('_id')
        next()
    }catch(error){
        console.log(error)
        res.status(400).json({error:'reqest no authorized'})
        


    }



}
module.exports =requireAuth