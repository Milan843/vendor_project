const express=require('express')
let bodyparser=require('body-parser')
// const login =require('./login')

let mongoose=require('mongoose')
require('./models/connection')
let signup=require('./router/signup')
let items=require('./router/items')
let signin=require('./router/signin')
let logout=require('./router/logout')
var path = require('path');

var dotenv = require('dotenv').config( path.resolve(process.cwd(), './.env') );


const app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.json('hello dude! this is backend')
})
app.use(signup)
app.use(signin)
app.use(logout)
app.use(items)

// app.use(login)


app.listen(3400,(req,res)=>{
    console.log("server started")
})