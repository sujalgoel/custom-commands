const {
	prefix
} = require('../../botsettings.json');
const {
	MessageEmbed
} = require('discord.js');
const tags = require('../../models/tags');
module.exports = async (bot, message) => {
	if (message.author.bot || !message.guild) return;
	if (!message.content.startsWith(prefix)) return;
	if (!message.member) message.member = await message.guild.fetchMember(message);
	const args = message.content.slice((typeof prefix === "string" ? prefix.length : 0)).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
	if (cmd.length === 0) return;
	const command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
	if (command) {
		command.run(bot, message, args);
	}
	if (!command) {
		tags.findOne({
				_id: message.guild.id,
				Command: cmd
			},
			async (err, data) => {
				if (err) throw err;
				if (data) {
					return message.channel.send(data.Content);
				} else return;
			}
		);
		return;
	}
};