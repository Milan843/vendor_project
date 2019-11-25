const express=require('express')
let User=require('../models/model')
const router=express.Router()
const jwt = require("jwt-simple");

//Logout the user by the token
//update the token by null
router.get("/logout/:token", async (req, res) => {
    const token = req.params.token;
    if(token){
      await User.findOneAndUpdate(
        { token },
        { token: null }
      );
      res.send('logout successfully')
    }
  });

  module.exports = router;







