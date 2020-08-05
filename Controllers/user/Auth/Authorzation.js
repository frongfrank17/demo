const genkey = require('./Model/genkey')
const jwt = require('jsonwebtoken')
const { User } = require('mongoose').models 
module.exports = {
    AuthMid : async (req , res , next) =>{
                const reqPayload = req.headers['authorization']
                const strt = "Authorization :"
                req.tokenPayload = reqPayload
                next()
    } , 
    AuthAccept : async (req , res , next ) =>{
                    const payload = req.tokenPayload 
                    const _payload = jwt.verify(payload , process.env.SECRET)
                    if(_payload.type !== 'access'){
                        res.status(401).send("Not Accept !")
                    }

                    const Key_ = genkey(_payload.email , _payload.password)
                    if(Key_ !== _payload.key) {
                        res.status(401).send("Not Accept !")
                    } 
                    const result = await User.findOne( {email : _payload.email} , {_id : 0 , password : 0})
                    res.status(200).json(result)

    }
}