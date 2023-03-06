const {Configuration, OpenAIApi} = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const GPT = async (cmd, req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
            What is your name?
            My name is Chatbot.
            How old are you?
            I am 900 years old.
            ${cmd}`,
      max_tokens: 100,
      temperature: 0,
    });
    if (response.data) {
      if (response.data.choices[0].text) {
        return res.status(200).json(response.data.choices[0].text);
      }
    }
  } catch (err) {
    return res.status(404).json({message: err.message});
  }
}

module.exports = GPT
