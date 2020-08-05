const router = require('express').Router()
// getuser
const {getUsers ,getuserById } = require('../Controllers/user/getuser')
router.get('/users' , getUsers)
router.get('/users/:id' , getuserById)
//login
router.post('/users' , require('../Controllers/user/register').Register)
const { Mid } = require('../Controllers/user/Auth/Middlware')
const { Login } = require('../Controllers/user/Auth/Login')
router.post('/users/auth' , Mid , Login )
// Auth
const { refresh } = require('../Controllers/user/Auth/refreshToken')
router.post('/users/auth/refresh' , refresh)
// edit 

// delete
module.exports = router