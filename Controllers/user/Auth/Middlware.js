const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { User } = mongoose.models
module.exports = {
        Mid : async (req , res , next) => {
               
                var payload = await User.findOne({email : req.body.email}).limit(1)
                if(!payload) {
                    res.status(200).json({ resultMessage : 'Email or password is invalid' })
                    return
                }
                const result = await bcrypt.compare(req.body.password, payload.password)
                if(!result) {
                    res.json({resultMessage : 'Email or password is invalid'})
                    return
                }
                req.userID = {email : payload.email , name : payload.name , password : payload.password }
                next()

            }
}