const Discord = require(`discord.js`);
const { MessageEmbed } = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const playermanager = require(`${process.cwd()}/handlers/playermanager`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`);
module.exports = {
  name: `play`,
  description: `Plays a Song/Playlist from Youtube`,
  parameters: {
    type: "music",
    activeplayer: false,
    previoussong: false,
  },
  options: [
    {
      String: {
        name: "what_song",
        description:
          "What Song/Playlist do you want to play? <LINK/SEARCH-QUERY>",
        required: true,
      },
    },
  ],
  run: async (
    client,
    interaction,
    cmduser,
    es,
    ls,
    prefix,
    player,
    message
  ) => {
    //
    if (!client.settings.get(message.guild.id, "MUSIC")) {
      return interaction.reply({
        ephemeral: true,
        embed: [
          new MessageEmbed()
            .setColor(es.wrongcolor)
            .setFooter(client.getFooter(es))
            .setTitle(client.la[ls].common.disabled.title)
            .setDescription(
              handlemsg(client.la[ls].common.disabled.description, {
                prefix: prefix,
              })
            ),
        ],
      });
    }
    try {
      let args = [interaction.options.getString("what_song")];
      if (!args[0]) args = [interaction.options.getString("song")];
      //Send information
      interaction.reply({
        content: `Searching and attempting to play: **${args[0]}** from <:youtube:1050726960172638249> \`Youtube\`!`,
      });
      //play the SONG from YOUTUBE
      playermanager(client, message, args, `song:youtube`, interaction);
    } catch (e) {
      console.log(String(e.stack).dim.bgRed);
    }
  },
};
