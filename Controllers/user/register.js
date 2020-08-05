const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { User } = mongoose.models
module.exports = {
    Register : async (req , res) => {
                
                var payload = await User.findOne({email : req.body.email })
                //console.log(payload)
                if(payload) { 
                    res.json({statusMessage : "Not Find email"})
                    return 
                }
                req.body.password = await bcrypt.hash(req.body.password , 10)
                var insertResult = await User.create(req.body)
                res.status(200).json({statusMessage : "insert susscess fully !" , resultMessage : insertResult})
    }
}