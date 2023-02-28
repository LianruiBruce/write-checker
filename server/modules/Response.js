const {Schema, model} = require('mongoose')

const responseSchema = new Schema({
  build_date: Date,
  articleId: String,
  is_deleted: Boolean,
  response: String
})

module.exports = model('Response', responseSchema)
