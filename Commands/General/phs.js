const client = require('../../index.js');
const Discord = require('discord.js');
const {rl} = require('../../Interface/Builder.js')

module.exports = {
    name: 'phs',
    description: '패치노트를 전송합니다.',
    /**
     * @param {client} client
     * @param {Discord.Message} message
     * @param {String[]} args
        **/
    run: async (client, message, args) => {
        if (message.author.id != client.config.ownerID) return;
        message.reply({embeds:[await rl()]})
    }
}
