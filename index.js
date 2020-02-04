const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', (msg) => {
    let member = msg.mentions.members.first();
    if(msg.content.startsWith(`${prefix}riseup`) && member){

        for(i=0; i < 100; i++){
        msg.channel.send(`Get on, ${member}`)   
        }

    }
})

client.on('message', (msg) => {
    if(msg.content.startsWith(`${prefix}clear`)){
        msg.channel.fetchMessages()
        .then((list) =>{
            msg.channel.bulkDelete(list)
        })
        msg.channel.send('Chat cleared')
    }
})


client.login(token);