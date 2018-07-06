var SlackBot = require('slackbots');
const axios  = require('axios');

const bot = new SlackBot({
    token: ''Enter Bot User OAuth Access Token from slack api' ',
    name: 'jokebot'
});

//start handler
bot.on('start',() => {
    var params = {
        icon_emoji: ':smiley:'
    }
    bot.postMessageToChannel('general','Get ready to tickle your bones',params);
})