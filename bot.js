const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjE3Mzc0MDM3MDAxMjQwNTg1.XWqMqA.xy3HliNwRkn35gbFLeSSZMn6FQM);//BOT_TOKEN is the Client Secret
