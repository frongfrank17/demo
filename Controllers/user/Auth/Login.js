const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { genAccessToken , genRefreshToken } = require('./Model/genarate')
module.exports = {
    Login : async (req , res) => {
            var payload = req.userID
            var accessToken = await genAccessToken(payload)
            var refreshToken = await genRefreshToken(payload)
            res.status(200).json({status : true ,
                 'accessToken' : accessToken , 
                 'refreshToken' : refreshToken  })
    }
}