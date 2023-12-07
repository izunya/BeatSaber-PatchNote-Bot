const client = require('../../index.js');
const Discord = require('discord.js');
const {rl} = require('../../Interface/Builder.js')

module.exports = {
    name: 'patchnote',
    description: 'Send Patchnote',
    aliases:['phs'],
    /**
     * @param {client} client
     * @param {Discord.Message} message
     * @param {String[]} args
        **/
    run: async (client, message, args) => {
        message.reply({embeds:[await rl()]})
    }
}
