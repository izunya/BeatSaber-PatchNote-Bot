const client = require('../../../index.js');
const Discord = require('discord.js');
const {rl} = require('../../../Interface/Builder.js')

module.exports = {
    name: 'patchnote',
    description: 'Send Patchnote',
    /**
     * @param {client} client
     * @param {Discord.CommandInteraction} interaction
     * @param {String[]} args
        **/
    run: async (client, interaction, args) => {
        await rl(interaction)
    }
}
