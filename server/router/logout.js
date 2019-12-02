const express=require('express')
let User=require('../models/model')
const router=express.Router()
const jwt = require("jwt-simple");
const auth = require("../middleware/auth");


//Logout the user by the token
//update the token by null
router.get("/logout/:token",auth, async (req, res) => {
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







