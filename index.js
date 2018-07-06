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
});

//Error Handler
bot.on('error',(err) => {
    console.log(err);
});

//Message hanlder
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return; 
    }
    handleMessage(data.text); 
});

//respond to User Input
function handleMessage(message){
    if(message.includes(' chucknorris')){
        chuckJoke();
    } else if(message.includes(' yomama')) {
        yomamaJoke();
    } else if (message.includes(' random'))
    {
        randomJoke()
    }
}

//Tell a YO Momma Joke
function yomamaJoke() {
    axios.get('http://api.yomomma.info')
    .then((res) => {
        const joke = res.data.joke;
        
        const params = {
            icon_emoji: ':laughing:'
        }
        bot.postMessageToChannel('general',`Yo Momma: ${joke}`,params);
    })
}

//Tell a Chuck Norris Joke
function chuckJoke() {
    axios.get('http://api.icndb.com/jokes/random')
    .then((res) => {
        const joke = res.data.value.joke;
        
        const params = {
            icon_emoji: ':laughing:'
        }
        bot.postMessageToChannel('general',`Chuck Norris: ${joke}`,params);
    })
}

//Tell a Randome Joke 
function randomJoke(){
    const rand = Math.floor(Math.random() *2) +1;
    if(rand === 1){
        chuckJoke()
    } else if(rand === 2){
        yomamaJoke();
    }
}