const client = require('../../../index.js');
const Discord = require('discord.js');
const {rlw} = require('../../../Interface/Builder.js')

module.exports = {
    name: 'webhookpatchnote',
    description: 'Send Patchnote in Webhooks',
    /**
     * @param {client} client
     * @param {Discord.CommandInteraction} interaction
     * @param {String[]} args
        **/
    run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return;
        await interaction.deferReply({ephemeral:true})
        await rlw()
        await interaction.deleteReply()
    }
}
