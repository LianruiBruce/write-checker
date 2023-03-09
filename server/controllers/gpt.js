const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const gptGetResponse = async (cmd) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "assistant", content: cmd }],
  });
  console.log(completion);
  // return completion.data.choices[0].message;
  return 'hello';
};

const gptGetTitle = async (topic) => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "assistant", content: topic }],
    });
    console.log(completion);
    return "world";
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

// role: "user": a message from the user
//       "assistant": a response from ChatGPT
//       "system": generally one initial message defining How we want ChatGPT to talk

// const gptGetResponse = async (cmd) => {
//   await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer " + process.env.OPENAI_API_KEY,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         {
//           role: "system",
//           content:
//             "Critically revise all articles or issues according to the given topic as a professional writing checker.",
//         },
//         cmd,
//       ],
//     }),
//   });
// };

// const gptGetTitle = async (topic) => {
//   await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer " + process.env.OPENAI_API_KEY,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         {
//           role: "system",
//           content: "Make the most suitable summary for the given topic.",
//         },
//         topic,
//       ],
//     }),
//   }).then ((data) => {
//     console.log(data.json())
//     return data.choices[0].message.content;
//   }).catch ((err) => {console.log(err)})
// };

module.exports = { gptGetResponse, gptGetTitle };
