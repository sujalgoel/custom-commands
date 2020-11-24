const botsettings = require('../../botsettings.json');
const mongoose = require('mongoose');
module.exports = async (bot) => {
	console.log(`Logged in as ${bot.user.tag}`);
	mongoose.connect(botsettings.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	});
	console.log('Connected to Data Base!');
};