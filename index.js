//Dev By ! vRP.Tuma#2874
// Coloque isso No terminal do seu Bot
// npm i discord.js
const Discord = require("discord.js"); 
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', async () => {
	
	console.log(`✅ Estou Online: ${client.user.username}`)
}

client.login(config.token); 