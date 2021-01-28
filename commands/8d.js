const discord = require('discord.js');
module.exports = {
    info: {
        name: "8d",
        description: "Plays song in 8D",
        usage: "[8d]",
        aliases: ["8D"],
    },

    run: async function (client, message, args) {
        if (!message.member.voice.channel) return message.channel.send("❌ | You must be in a voice channel to use this command!");
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("❌ | You are not in my voice channel!");
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue && !serverQueue.playing){
            return message.channel.send("❌ | I'm not playing anything?");
        }
        const edEnabled = await client.player.getQueue(message.guild.id).filters["8D"];
        client.player.setFilters(message.guild.id, {
            "8D": !edEnabled
        });
        return message.channel.send(`✅ | 8D ${!edEnabled ? "Enabled" : "Disabled"}!`)
    }
};