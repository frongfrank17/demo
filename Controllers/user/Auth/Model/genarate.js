const jwt = require('jsonwebtoken')
const genKey = require('./genkey')
function genAccessToken (payload)  {
      console.log(payload)
        const key = genKey(payload.email , payload.password)
     //   console.log(key)
        const payloadToken  = { type : 'access' , email : payload.email ,password : payload.password ,name : payload.name  , key }
        console.log(payloadToken)
        const accessToken = jwt.sign(payloadToken , process.env.SECRET , {expiresIn : '1hr'})
        return  accessToken
}
function genRefreshToken (payload) {
      const key = genKey(payload.email , payload.password)
       const payloadToken  = { type : 'refresh' ,email : payload.email ,password : payload.password ,name : payload.name , key  }
       const refreshToken = jwt.sign(payloadToken , process.env.SECRET , {expiresIn : '1hr'})
       return  refreshToken
}
 module.exports = {
        genAccessToken , genRefreshToken 
 }