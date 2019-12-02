const express=require('express')
const jwt = require("jwt-simple");
let User=require('../models/model')
const router=express.Router()
const mailer=require('../mailer/nodemailer')

//Signup router
//update the User in the db
router.post('/user',async (req,res)=>{
    let query=req.body.email;
    userdetail = new User(req.body);
    //Checks whether user is present or not
    await User.findOne({email:query},function(err,data){
        if(err) console.log(err);
        if(data){
            
            res.send('this have already exist in db')
        }else{
            
            name=req.body.name;
            email=req.body.email;
            password=req.body.password
            const secretKey="secret";
            let date=new Date();
            let time=date.getTime();
            token = jwt.encode({ name,email,password, time }, process.env.SECRET_KEY);
            //send the token for verification
            // mailer(`http://localhost:3400/verify/${token}`)
            console.log(`http://localhost:3400/verify/${token}`);
            return res.send(`verify your account for ${email}`);
           
        }
    })
 
 })
//verify the token and save user details in db
 router.get('/verify/:token',async(req,res)=>{
    try{
    const secretKey="secret";
    const decodedtoken = jwt.decode(req.params.token,process.env.SECRET_KEY );
    const { name, email, password } = decodedtoken;
    console.log(userdetail.email)
   
    if(userdetail.email==email){
    await User.insertMany({ name, email, password });
    
    // res.send("email verified successfully");
    res.redirect('http://localhost:3000');
    }else{
        res.send("wrong token");
    }
}catch{
    res.send("wrong token catch")
}

     
 })


module.exports=router