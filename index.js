const botsettings = require('./botsettings.json');
const { Client, Collection } = require('discord.js');
const bot = new Client({ disableMentions: 'everyone', ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES'] } });
bot.commands = new Collection();
bot.aliases = new Collection();

['command', 'event'].forEach(handler => {
	require(`./handlers/${handler}`)(bot);
});

bot.login(botsettings.token);