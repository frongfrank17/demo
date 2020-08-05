const { route } = require('./user')

const router = require('express').Router()
//display
const {} = require('../Controllers/product')
router.get('/product')
router.get('product/:Name')
// insert 
const {} = require('../Controllers/product')
router.post('/product')
// edit or add 
const {} = require('../Controllers/product')
router.put('/product/amount/:_id')
router.put('/product/:_id')
// del 
const {} = require('../Controllers/product')
router.delete('/product')
router.delete('/product/:id')
module.exports = router