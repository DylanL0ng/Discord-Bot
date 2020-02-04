const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', (msg) => {

    if(msg.content.startsWith(`${prefix}riseup`) && msg.mentions.members.first()){

        let member = msg.mentions.members.first();
        console.log(member)
        for(i=0; i < 5; i++){
        msg.channel.send(`Rise Up ${member}! :dobelikethat:`)
        }
    }

})


client.login(token);