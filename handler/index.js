const Discord = require('discord.js');
const client = require('../index.js');
const { glob } = require('glob');
const { promisify } = require('util');

const globPromise = promisify(glob);

/**
 * 
 * @param {client} client
 */

module.exports = async (client) => {
    // Command Handler
    const commandfiles = await globPromise(`${process.cwd()}/Commands/General/*.js`);
    commandfiles.map((value) => {
        const file = require(value);
        const split = value.split("/");
        const directory = split[split.length - 2];
        if (file.name) {
            const properties = { directory: directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    // Event Handler
    const eventfiles = await globPromise(`${process.cwd()}/events/General/*.js`);
    eventfiles.map((value) => {
        require(value)
    });

    // Slash Command Handler
    const slashcommandfiles = await globPromise(`${process.cwd()}/Commands/Slashcommands/**/**/*.js`);
    const arrayOfSlashCommands = [];
    slashcommandfiles.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashcommands.set(file.name, file);
        if (['MESSAGE', 'USER'].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });


    // All Counter
    console.log(`Loading Commands : ${commandfiles.length}`)
    console.log(`Loading Events : ${eventfiles.length}`)
    console.log(`Loading Slash Commands : ${slashcommandfiles.length}`)

    // Registering Slash Commands
    client.on(Discord.Events.ClientReady, async () => {
        await client.application.commands.set(arrayOfSlashCommands);
    });
}