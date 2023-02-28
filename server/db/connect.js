const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const connectDB = (url) => {
  console.log('DataBase Connecting...')
  return mongoose.connect(url)
}

module.exports = connectDB