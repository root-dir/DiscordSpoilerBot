require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_WEBHOOKS"]});

client.on('ready', () => {
    client.user.setActivity("Spider-Man: Miles Morales");
});

client.on('channelCreate', channel => {
    if (channel.parent.name.includes("Spoiler")) {
        channel.send("Creating spoiler thread...").then(newMsg => {
            newMsg.startThread({
                name: channel.name + " SPOILERS",
                autoArchiveDuration: 1440,
                reason: 'Here there be spoilers!'
            }).then(newThread => {
                newThread.send("Thread created.  SPOIL AWAY!");
                channel.send("Spoiler thread created. \n\nENTER AT YOUR OWN RISK. \n\nHere there be spoilers.");
            })
        })

    }
})
client.login(process.env.BOT_TOKEN);