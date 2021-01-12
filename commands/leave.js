const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "leave",
        description: "Leaves the voice channel of the messenger",
        usage: "[leave]",
        aliases: ["l"],
    },

    run: async function (client, message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send("You need to be in a voice channel");

        await voiceChannel.leave();
        await message.channel.send('Leaving the voice channel :smiling_face_with_tear:');
    }
}