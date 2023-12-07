const client = require('../../index.js')
const Discord = require('discord.js');
const config = require('../../config.js');

module.exports = {
    name: 'Command_Enable',
};

client.on(Discord.Events.MessageCreate, async (message) => {
    if (message.author.bot) return;
    if (message.channel.type === Discord.ChannelType.DM) return;

    let prefixUsed = null;
    for (const prefix of config.prefix) {
        if (message.content.toLowerCase().startsWith(prefix)) {
            prefixUsed = prefix;
            break;
        }
    }

    if (!prefixUsed) return;

    let [cmd, ...args] = message.content.slice(prefixUsed.length).trim().split(/ +/g);
    let command = client.commands.get(cmd.toLowerCase()) || client.commands.find((c) => c.aliases && c.aliases?.includes(cmd.toLowerCase()));
    if (command) {
        console.log(`${command.name} | ${message.member.user.tag} | ${message.member.id} | ${message.guild.name} | ${message.guild.id}`);
        try {
            await command.run(client, message, args)
        } catch (err) {
            console.log(err);
        }
    }
})
