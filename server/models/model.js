const mongoose=require('mongoose');
//Schema of the User store
let Schema=mongoose.Schema;

let userSchema= new Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:8,
        required:true,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can not be "password"')
            }
        }
    },
    token:{
        type:String,
        default:null
    },
    items:{
        type:[]
    }
})

module.exports=mongoose.model('User',userSchema)