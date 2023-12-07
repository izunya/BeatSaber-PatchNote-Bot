const client = require('../../index.js')
const Discord = require('discord.js')

module.exports = {
    name: 'error'
}

const owner = client.users.cache.get(client.config.ownerID)

client.on(Discord.Events.ShardError, error => {
	if (owner.id) owner.send(`Shard Error: ${error}`)
	return console.log(error);
});

client.on(Discord.Events.Error, error => {
	if (owner.id) owner.send(`Events Error: ${error}`)
	return console.log(error);
})

client.rest.on('invalidRequestWarning', error => {
	if (owner.id) owner.send(`Invalid Request Warning: ${error}`)
	return console.log(error)
})

process.on('unhandledRejection', error => {
	if (owner.id) owner.send(`Unhandled Rejection: ${error}`)
	return console.log(error);
});