const {Schema, model} = require('mongoose')

const articleSchema = new Schema({
  build_date: Date,
  response_id: String,
  is_checked: {
    type: Boolean,
    default: false
  },
  is_deleted: {
    type: Boolean,
    default: false
  },
  topic: {
    type: String,
    trim: true, // get rid of the front and end spaces
    maxLength: [5000, 'topic cannot be more than 5,000 characters'],
    required: true
  },
  content: {
    type: String,
    trim: true,
    maxLength: [50000, 'content cannot be more than 50,000 characters'],
    required: true
  }
})

module.exports = model('Article', articleSchema)
