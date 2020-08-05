const { Products } = require('mongoose').models
module.exports = {
    insert : async (req , res) =>{
                
                try {
                    const result = await Products.create(req.body)
                    res.status(200).json({ status : true , "result" : result })
                } catch(err) {
                    res.status(401).send(err.message)
                }
    } 
}