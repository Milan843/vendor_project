//Settngup the database connection
let mongoose=require('mongoose')

let mydb='mongodb://localhost/example';
mongoose.connect(mydb,{ useNewUrlParser: true , useUnifiedTopology: true });