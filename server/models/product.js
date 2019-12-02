const mongoose=require('mongoose');
//Schema of the User store
let Schema=mongoose.Schema;

let productSchema= new Schema({
    product_name:{
        type:String,
        required:true,
        
    },
  
    userId:{
        type:mongoose.Schema.Types.ObjectId
    }
})
module.exports=mongoose.model('Product',productSchema)