const client = require('../../index.js')
const Discord = require('discord.js');

module.exports = {
    name: 'SlashCommand_Enable',
};

client.on(Discord.Events.InteractionCreate, async (interaction) => {
    if (interaction.user.bot) return;
    if (interaction.channel.type === Discord.ChannelType.DM) return;
    if (interaction.isCommand()) {
        const cmd = client.slashcommands.get(interaction.commandName);
        if (!cmd) return await interaction.reply({ content: 'Error!\nCommand NotFound', ephemeral: true });
        const args = [];
        if (cmd.permission) {
            const authorperms = interaction.channel.permissionsFor(interaction.member);
            if (!authorperms || !authorperms.has(cmd.permission)) {
                return await interaction.reply({ content: 'Permission Missing', ephemeral: true });
            }
        }
        for (let option of interaction.options.data) {
            if (option.type == Discord.ApplicationCommandOptionType.Subcommand) {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value)
        }
        console.log(`${cmd.name} | ${interaction.member.user.tag} | ${interaction.member.id} | ${interaction.guild.name} | ${interaction.guild.id}`);
        try {
            await cmd.run(client, interaction, args);
        } catch (err) {
            await interaction.reply({ content: 'Error!', ephemeral: true });
            console.log(err);
            return;
        }
    }
    if (interaction.isContextMenuCommand()) {
        const cmd = client.slashcommands.get(interaction.commandName);
        if (!cmd) return await interaction.reply({ content: 'Error!\nCommand NotFound', ephemeral: true });
        try {
            if (cmd) await cmd.run(client, interaction);
        } catch (err) {
            await interaction.reply({ content: 'Error!', ephemeral: true });
            console.log(err);
            return;
        }
    }
})