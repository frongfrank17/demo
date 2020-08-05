const { Products } = require('mongoose').models
module.exports = {
    getProdcut : async (req , res) =>{
                try {
                    const result = await Products.find()
                    res.status(200).json(result)
                }catch(err) {
                    res.status(401).send(err.messager)
                } 
    } , 
    getById : async (req ,res) =>{
            try {
                const result = await Products.findOne({_id : req.params.id}).limit(1)
                res.status(200).json(result)
            }catch(err) {
                res.status(401).send(err.messager)
            } 
    }
}