const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
// const { ChatGPTAPI } = require('chatgpt');
const { phase_1, phase_2, phase_3 } = require('./command');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const GPT = async (topic, content) => {
  const cmd = phase_1 + `\n\n${topic}\n\n` + phase_2 + `\n\n${content}\n\n` + phase_3
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Hello world"}],
  })
}

module.exports = GPT
