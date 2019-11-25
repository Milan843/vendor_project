const express=require('express')
let User=require('../models/model')
const router=express.Router()
const jwt = require("jwt-simple");

//The signin router
//checks user is valid or not and update by a token
router.post('/signin',async (req,res)=>{
    console.log('in signin')
    const userEmail=req.body.email
    const userPassword=req.body.password

    try{
        
        const foundValue= await User.findOne({email:userEmail});
        if (foundValue.password==userPassword){
            const secretKey="secret";
            let date=new Date();
            let time=date.getTime();
            token = jwt.encode({ email: userEmail, time }, secretKey);
            
            await User.updateOne({ email: userEmail }, { token: token });
            console.log(token)
            return res.send({msg:"successfully logged IN", token});

        }else{
            return res.send('credential not match jncj')
        }
    }
    catch{
        return res.send("credential not match!")
    }
   
})
module.exports=router