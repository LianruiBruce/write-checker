// const User = require('../modules/User')
const Article = require("../modules/Article");
// const Response = require('../modules/Response')
const { gptGetResponse, gptGetTitle } = require("../controllers/gpt");
const { response } = require("express");
const { stringify } = require("nodemon/lib/utils");
const { getCommands, getTitle } = require("./command");

/* Queries of mongoose models
 * Model.deleteMany()
 * Model.deleteOne()
 * Model.find()
 * Model.findById()
 * Model.findByIdAndDelete()
 * Model.findByIdAndRemove()
 * Model.findByIdAndUpdate()
 * Model.findOne()
 * Model.findOneAndDelete()
 * Model.findOneAndRemove()
 * Model.findOneAndReplace()
 * Model.findOneAndUpdate()
 * Model.replaceOne()
 * Model.updateMany()
 * Model.updateOne()
 * */

const createArticle = async (req, res) => {
  try {
    if (!req.body) {
      res.status(500).json({ msg: "No Request!" });
      return;
    }
    // req.body.response = await GPT(req.body.topic, req.body.content)
    const topic = req.body.topic.toString();
    const content = req.body.content.toString();
    // console.log(req.body);
    const response = await gptGetResponse(getCommands(topic, content));
    const title = await gptGetTitle(getTitle(topic));

    console.log(response, title);

    const article = await Article.create({
      build_date: Date.now(),
      is_checked: true,
      is_deleted: false,
      topic: topic,
      content: content,
      response: response,
      title: title,
    });
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({}).limit(12).sort({ build_time: -1 });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getAnArticle = async (req, res) => {
  try {
    const { id: articleId } = req.params;
    const article = await Article.findOne({ _id: articleId });
    if (!article) {
      return res.status(404).json({ msg: "Not Found the Article" });
    }
    const topic = article.topic;
    const content = article.content;
    // const res_id = article.response_id
    // const res_body = Response.findOne({_id: res_id})
    // const response = res_body.response
    const response = article.response;
    if (!response) {
      return res.status(404).json({ msg: "Not Found the Response" });
    }
    res.status(200).json({
      topic: topic,
      content: content,
      response: response,
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateArticle = async (req, res) => {
  try {
    const { id: articleId } = req.params;
    const article = await Article.findOneAndUpdate(
      { _id: articleId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!article) {
      return res.status(404).json({ msg: "Not Found the Article" });
    }
    res.status(200).json({ article });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { id: articleId } = req.params;
    const article = await Article.findOneAndDelete({ _id: articleId });
    if (!article) {
      return res.status(404).json({ msg: "Not Found the Article" });
    }
    res.status(200).json({ msg: "Delete Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

/*
const createResponse = (req, res) => {
  try {
    const response = Response.create(req.body)
    res.status(201).json({response})
  } catch (err) {
    res.status(500).json({msg: err})
  }
}

const getResponse = (req, res) => {
  try {
    const {id: responseId} = req.params
    const response = Response.findOne({_id: responseId})
    if (!response) {
      res.status(404).json({msg: 'Not Found the Response'})
    }
    res.status(200).json({response})
  } catch (err) {
    res.status(500).json({msg: err})
  }
}
*/

module.exports = {
  createArticle,
  getAllArticles,
  getAnArticle,
  updateArticle,
  deleteArticle, //, createResponse, getResponse
};
