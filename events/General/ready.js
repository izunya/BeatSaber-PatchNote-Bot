const { rlw } = require('../../Interface/Builder.js');
const client = require('../../index.js')
const Discord = require('discord.js');
module.exports = {
    name: 'ready'
}

client.once(Discord.Events.ClientReady, async (client) => {
    const owner = client.users.cache.get(client.config.ownerID)
    console.log(`Logged in as ${client.user.tag} | ${client.user.id}!`);
    if(owner.tag){
        console.log(`Hello ${owner.username}!`);
    }else{
        console.log("Not Found Owner ID in config.js!!!")
    }
    client.user.setPresence({ activities: [{ name: `p!help | /help`, type: Discord.ActivityType.Playing }]});
    rlw()
})