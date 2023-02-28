const {Schema, model} = require('mongoose')
const articleSchema = require('./Article').schema
const responseSchema = require('./Response').schema

const userSchema = new Schema({
  articles: [articleSchema],
  response: [responseSchema]
})

module.exports = model('User', userSchema)
