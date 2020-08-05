const express = require('express')
var morgan = require('morgan')
const http = require('http')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
const server = http.createServer(app)
const port = process.env.port || 8000
const initMongoose = require('./initDB')
require('dotenv').config()
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded( { extended:true }))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded( {extended:true} ))
app.use(cors())

var dbName = "Demo"
initMongoose(dbName).then( () => {
  app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
  })
})
/*initMongoose(dbName).then(() => {
  app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
  })
})*/
app.use('/api/demo/' , require('./Routes/user'))
const { AuthMid , AuthAccept } = require('./Controllers/user/Auth/Authorzation')
app.get('/api/demo/auth' , AuthMid , AuthAccept  )

app.use((req, res, next) => {
  
    const err = new Error('Not found');
  
    err.status = 404;
    
    next(err);
    
  });
  
app.use((err, req, res, next) => {
  
    res.status(err.status || 500);
  
    res.send({  error: {  status: err.status || 500 ,  message: err.message  } });
  
  });
//console.log(process.env.MONGO_URL)