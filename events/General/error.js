const client = require('../../index.js')
const Discord = require('discord.js')

module.exports = {
    name: 'error'
}

client.on(Discord.Events.ShardError, error => {
	return console.log(error);
});

client.on(Discord.Events.Error, error => {
	return console.log(error);
})

client.rest.on('invalidRequestWarning', error => {
	return console.log(error)
})

process.on('unhandledRejection', error => {
	return console.log(error);
});