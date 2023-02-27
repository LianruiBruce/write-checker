const createArticle = (req, res) => {
  res.json(req.body)
}

const getAllArticles = (req, res) => {
  res.send('get all articles')
}

const updateArticle = (req, res) => {
  res.send('Article Updated')
}

const deleteArticle = (req, res) => {
  res.send('Article Deleted')
}

const createResponse = (req, res) => {
  res.send('Hi, there')
}

const getResponse = (req, res) => {
  res.send('Hi, there')
}

module.exports = {
  createArticle, getAllArticles, updateArticle, deleteArticle, createResponse, getResponse
}