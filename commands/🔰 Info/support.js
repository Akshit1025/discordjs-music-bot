const { MessageEmbed, MessageActionRow } = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { MessageButton } = require("discord.js");
module.exports = {
  name: "support",
  category: "🔰 Info",
  usage: "invite",
  description: "Sends you the Support Server Link",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let button_invite = new MessageButton()
      .setStyle("LINK")
      .setLabel("Invite this Bot")
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`
      );
    //array of all buttons
    const allbuttons = [
      new MessageActionRow().addComponents([
        button_invite,
      ]),
    ];
    message.reply({
      embeds: [
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle(client.la[ls].cmds.info.support.title)
          .setDescription(
            eval(client.la[ls]["cmds"]["info"]["support"]["variable1"])
          )
          .setFooter(
            "Ghost Music"
          )
          .setURL(
            "https://discord.com/api/oauth2/authorize?client_id=784364932149280778&permissions=8&scope=bot%20applications.commands"
          ),
      ],
      components: allbuttons,
    });
  },
};
