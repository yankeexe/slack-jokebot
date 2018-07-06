var SlackBot = require('slackbots');
const axios  = require('axios');

const bot = new SlackBot({
    token: 'xoxb-393799273648-395558879863-wPOX5FmhE5wfJRZBQl87qyIl',
    name: 'jokebot'
});

//start handler
bot.on('start',() => {
    var params = {
        icon_emoji: ':smiley:'
    }
    bot.postMessageToChannel('general','Get ready to tickle your bones',params);
})