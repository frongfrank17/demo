const mongoose = require('mongoose')
require('./Models/product')
require('./Models/user')
const initMongoose = dbName => 
    new Promise ((resolve , reject) => {
        const mongoURL = `mongodb://localhost:27017/${dbName}`
        mongoose
        .connect(mongoURL , {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }).catch(err => {
            console.warn(`Error  catch : ${err}`)
            return reject(err)
        })
        mongoose.connection.once('open' , async () => {
            console.log(`Database connect on Demo`)
            return resolve(mongoose)
        })
    })

module.exports = initMongoose
/*
const initMongoose = () =>
  new Promise((resolve, reject) => {
    const mongoUrl = MONGO_URL
    mongoose
      .connect(mongoUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .catch(err => {
          console.log("catch")
        console.warn(`Error: ${err}`)
        return reject(err)
      })

    mongoose.connection.once('open', async () => {
      console.log(`Database connect on Demo `)
      return resolve(mongoose)
    })
  })

module.exports = initMongoose
*/