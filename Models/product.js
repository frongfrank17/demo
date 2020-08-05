const mongoose = require('mongoose')
const  { Schema } = mongoose
const productSchema = new Schema({
        Name : String , 
        Color : String , 
        Price : String, 
        Amount : Number
}, { timestamps : true })

mongoose.model('Products' , productSchema)