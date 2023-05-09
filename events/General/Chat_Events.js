const client = require('../../index.js')
const Discord = require('discord.js')

module.exports = {
    name: 'Chat Events'
}

client.on(Discord.Events.MessageCreate, async (message) => {
})