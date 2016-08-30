'use strict';
var randomEmojiGenerator = require('random-emoji-generator');

// We import the package that we installed earlier
const SlackBot = require('slackbots');

// We create a new Slack bot using the Token and name from before
const bot = new SlackBot({
  // Replace <SLACK_TOKEN> with the token from step E
  token: process.env.SLACK_TOKEN,
  // Replace <BOT_NAME> with the name from step E
  name: 'happybot'
});

let unicorn = {
  'icon_emoji': ':unicorn_face:'
};

// This will be invoked when our bot has connected to Slack
bot.on('start', () => {
  // Define channel, where bot exist.
  // You can adjust it there https://my.slack.com/services
  // bot.postMessageToChannel(
  //   // We select a channel that our bot should write to
  //   'general',
  //   // The message that the bot should post to the channel
  //   'Hello!',
  //   unicorn
  // );
});

// This will manage messages that are posted to the channel the bot is connect to
// Using it we can make the bot respond to what is posted
// For this to work we will first need to invite the bot to the channel
bot.on('message', (data) => {
  // data.text contains the message that was written in a channel or to the bot directly
  // data.channel contains the channel id
  // data.user contains the user id

  // When the bot sees a message that is exactly ping
  if (data.text === 'ping') {
    // It will answer with pong
    bot.postMessage(data.channel, randomEmojiGenerator(), unicorn);
  }
});
