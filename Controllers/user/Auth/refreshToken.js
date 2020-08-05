const jwt = require('jsonwebtoken')
const { User } = require('mongoose').models 
const { genAccessToken  } = require('./Model/genarate') 
const genKey = require('./Model/genkey')
module.exports = {
    refresh : async (req , res , next ) => {
              const refreshToken = req.body.refreshToken
            //  console.log(process.env.REFRESH_SECRET)
              //console.log(refreshToken)
              try {
                const Token =jwt.verify(refreshToken , process.env.SECRET) 
                  console.log(Token.type)
                if(Token.type !== 'refresh') {
                  throw new Error ('wrong token type ')
                } 
                const result = await User.findOne({email : Token.email})
                console.log(result)
                const keyToCompare = genKey(result.email, result.password);

                if (keyToCompare !== Token.key) {
                  throw new Error('password changed');
                }
                const newAccessToken = await genAccessToken(result)
                console.log(newAccessToken)
                res.status(200).json({ status : true , AccessToken : newAccessToken})
              } catch(e) {
                console.log("catch ")
                res.status(401).send(e.message )
              }
    } , 
}


 