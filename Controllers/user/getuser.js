const mongoose = require('mongoose')
const { User } = mongoose.models
module.exports = {
    getUsers : async (req , res) => {
                        var result = await User.find()
                        console.log(result)
                        res.json({status : true , resultMessage : result})
    } , 
    getuserById : async (req ,res) => {
                    const  { id } = req.param
                    var result = await User.findById({_id : id})
                    if(result != undefined) {
                        res.json({status : false , resultMessage : result})
                        return
                    } 
                    res.json({status : true , resultMessage : result})

    }
}