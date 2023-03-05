const express = require('express')
const router = express.Router()

const {
  createArticle,        // after user click the submit button
  getAllArticles,       // after user login / refresh / back the page (displayed at sidebar)
  getAnArticle,         // after user click one article of the sidebar articles
  // createResponse,    // after creating article or updating article
  // getResponse,       // after GPT create the response
  updateArticle,        // after user click the update button
  deleteArticle         // after user click the delete button
} = require('../controllers/checker')

router.route('/').post(createArticle).get(getAllArticles)
router.route('/:id').get(getAnArticle).patch(updateArticle).delete(deleteArticle)
// router.route('/resp').post(createResponse).get(getResponse)

module.exports = router