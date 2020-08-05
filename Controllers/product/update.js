const { Products } = require('mongoose').models
module.exports = {
    updateAmount : async (req , res) =>{
                    const product = await Products.findOne({_id : req.params.id})
                    const amount = product+req.body.amount
                    await Products.sava()
                    
    } , 
    update : async (req ,res) =>{
        
    }
}