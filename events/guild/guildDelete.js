//The Module
const { Permissions } = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const settings = require(`${process.cwd()}/botconfig/settings.json`);
module.exports = async (client, guild) => {
  client.logger(
    `Left a Guild: ${guild.name} (${guild.id}) | Members: ${
      guild.memberCount
    } | Current-Average Members/Guild: ${Math.floor(
      client.guilds.cache
        .filter((e) => e.memberCount)
        .reduce((a, g) => a + g.memberCount, 0) / client.guilds.cache.size
    )}`.red
  );
  if (!settings[`show-serverjoins`]) return;
  if (!guild || guild.available === false) return;
  let theowner = "NO OWNER DATA! ID: ";
  await guild
    .fetchOwner()
    .then(({ user }) => {
      theowner = user;
    })
    .catch(() => {});
  let embed = new MessageEmbed()
    .setColor("RED")
    .setTitle(`👋 Left a Guild`)
    .addField("Guild Info", `>>> \`\`\`${guild.name} (${guild.id})\`\`\``)
    .addField(
      "Owner Info",
      `>>> \`\`\`${
        theowner
          ? `${theowner.tag} (${theowner.id})`
          : `${theowner} (${guild.ownerId})`
      }\`\`\``
    )
    .addField("Member Count", `>>> \`\`\`${guild.memberCount}\`\`\``)
    .addField("Guilds Bot is in", `>>> \`\`\`${client.guilds.cache.size}\`\`\``)
    .addField(
      "Leave Server:",
      `>>> \`\`\`${config.prefix}leaveserver ${guild.id}\`\`\``
    )
    .setThumbnail(
      guild.iconURL({
        dynamic: true,
      })
    );
  for (const owner of config.ownerIDS) {
    client.users
      .fetch(owner)
      .then((user) => {
        user
          .send({
            embeds: [embed],
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
};
