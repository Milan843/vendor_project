const mongoose=require('mongoose');
//Schema of the User store
let Schema=mongoose.Schema;

let productItemSchema= new Schema({
    item_name:{
        type:String,
        required:true,
        
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId

    },
    quantity:{
        type:Number,
        default:1
    }
})
module.exports=mongoose.model('ProductItem',productItemSchema)