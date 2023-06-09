const Discord = require('discord.js');
const client = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages]})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login('i cant give you my key because discord said no');
