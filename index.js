require("colors");
const fs = require("fs")
const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require("discord.js");
const client = new Client ({  intents:53608447 });





client.on("ready", () => {
	console.log(`Conectado como ${client.user.username}`.green)
});

const { ActivityType } = require(`discord.js`);


client.on("ready", () => {

	const time = (200*5);

	let status = [
	[{
		name: "Low Light",
		type: ActivityType.Streaming,
        url:  "https://www.youtube.com/watch?v=1vhh8z8bkko"
	}],
	[{
	
		name: "Low Light",
		type: ActivityType.Streaming,
        url:  "https://www.youtube.com/watch?v=1vhh8z8bkko"
	}]
	];
	setInterval(() => {
		function randomStatus() {
			let astatus = status[Math.floor(Math.random() * status.length)];
			client.user.setPresence({ activities: astatus, status: "dnd" });
	}
	randomStatus();
   }, time)
	console.log(`Conectado como ${client.user.username}`.green)
});

client.on("guildMemberAdd", (member) => {

	const embed = new EmbedBuilder()
	.setColor("Green")
	.setDescription(`Bienvenido/a usuario ${member.user.username} `)
	.addFields(
		{ name: "No olvides leer las reglas", value: "reglas: <#1293802875998310420>" },
	)
	.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
	.setTimestamp()

	client.channels.cache.get("1294197587666141236").send({ embeds: [embed] })
});
const config = require("./config.json")
let prefix = config.prefix; 

client.on("messageCreate", async (message) => {

	if(!message.content.startsWith(prefix)) return;
	if(message.author.bot) return;
	
	if(message.content.startsWith(prefix + "ping")) {
		message.channel.send("pong")//
	}
	if(message.content.startsWith("Low Light")) {
		const embed = new EmbedBuilder()
		.setColor("White")
		.setDescription("Low Light la mejor shop lo digo sin atao")
		.setTitle("Low Light")
		.setImage("https://cdn.discordapp.com/avatars/776998630082609213/9a6711ef074c8d8a5004bfc1379fd161.png?size=1024")
		message.channel.send({ embeds: [embed] })
	}
	if(message.content.startsWith("xaska")) {
		message.channel.send("no hably tan reventao hijo la gran perra kualkier wea yo el ma xoro de aki el ke la llea y el ke roa de menor me epitiao kualkier monea brr")//
	}
})  	


client.on("messageCreate", async (message) => {

	if(message.content.startsWith("espuma ve mi perfil")) {
		message.channel.send("espuma <@954865691373228103> ve mi perfil y entra a donde dice ver vas a flipar despues me lo agradeces By Toaesa <@776998630082609213>")//
	}
})  	



   
client.login("MTI5MzgyNDMzNTI5MDgzMDg3OQ.GEYd5h.7kftrOBHUcGe8SKb6sKeEhAptP7LOjxmHHDR4s"); 