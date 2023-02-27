const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const checker = require('./routes/checker')
require('dotenv').config()

const PORT = 2023

app.use(express.json())
app.use('/api/v1/checker', checker)

// app.get('/api/v1/checker')
// app.post('api/v1/checker')
// app.patch('/api/v1/checker/:id')
// app.delete('/api/v1/checker/:id')
// app.get('/api/v1/checker/:resp')
// app.post('/api/v1/checker/:resp')

const run = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`)
    })
  } catch (err) {
    console.log(err)
  }
}

run()