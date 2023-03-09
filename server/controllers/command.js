require("dotenv").config();

const getCommands = (topic, content) => {
  const cmd =
    process.env.PHASE_1 +
    `\n\n${topic}\n\n` +
    process.env.PHASE_2 +
    `\n\n${content}\n\n` +
    process.env.PHASE_3;
  return cmd.toString();
};

const getTitle = (topic) => {
  const cmd = process.env.PHASE_4 + topic;
  return cmd.toString();
};

module.exports = { getCommands, getTitle };
