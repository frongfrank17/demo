const mongoose = require('mongoose')
const  { Schema } = mongoose
const userSchema = new Schema({
        email : { type: String, trim: true, index: true, required: true },
        password : String , 
        name: String,
}, { timestamps : true })

mongoose.model('User' , userSchema)     