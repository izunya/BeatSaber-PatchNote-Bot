const { Client, Collection, Partials, IntentsBitField, EmbedBuilder, WebhookClient } = require('discord.js')
const { scheduleJob, RecurrenceRule, Range } = require('node-schedule');
require('dotenv').config()
if (process.env.TOKEN == undefined || process.env.WEBHOOKS == undefined) {
    throw new Error('TOKEN OR WEBHOOKS is not defined in .env file')
}

const { rlw } = require('./Interface/Builder.js')

const client = new Client({
    intents: [99999, IntentsBitField.Flags.GuildPresences], partials: [Partials.Channel, Partials.GuildMember, Partials.Message, Partials.Reaction, Partials.User, Partials.GuildScheduledEvent, Partials.ThreadMember]
})
module.exports = client;

client.commands = new Collection();
client.slashcommands = new Collection();
client.config = require('./config');

rlw()

const RRl = new RecurrenceRule();
RRl.dayOfWeek = [0, new Range(0, 6)];
RRl.minute = 00;
RRl.tz = 'Asia/Seoul'

scheduleJob(RRl, async function () {
    await rlw()
})


require('./handler')(client);
client.login(process.env.TOKEN);