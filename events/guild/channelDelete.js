//The Module
const { Permissions } = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
//Log if a Channel gets deleted, and the Bot was in, then delete the player if the player exists!
module.exports = async (client, channel) => {
  if (channel.type === "GUILD_VOICE") {
    if (channel.members.has(client.user.id)) {
      var player = client.manager.players.get(channel.guild.id);
      if (!player) return;
      if (channel.id === player.voiceChannel) {
        //destroy
        player.destroy();
      }
    }
  }
};
