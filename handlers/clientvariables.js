const Discord = require("discord.js");
const fs = require("fs");
const config = require(`${process.cwd()}/botconfig/config.json`);
const settings = require(`${process.cwd()}/botconfig/settings.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const radios = require("../botconfig/radiostations.json");
module.exports = (client) => {
  try {
    /**
     * @INFO
     * This will be all of our CLIENT VARIABLES for the commands as well as a cooldown system for each cmd!
     */
    client.invites = {};
    client.commands = new Discord.Collection(); //an collection (like a digital map(database)) for all your commands
    client.aliases = new Discord.Collection(); //an collection for all your command-aliases
    client.rateLimit = new Discord.Collection();
    client.slashCommands = new Discord.Collection(); //an collection for all the slash Commands
    client.categories = fs.readdirSync("./commands/"); //categories
    client.cooldowns = new Discord.Collection(); //an collection for cooldown commands of each user

    /**
     * @INFO
     * The Euqalizer Settings
     */
    client.defaultEQ = [
      {
        band: 0,
        gain: 0.25,
      },
      {
        band: 1,
        gain: 0.025,
      },
      {
        band: 2,
        gain: 0.0125,
      },
      {
        band: 3,
        gain: 0,
      },
      {
        band: 4,
        gain: 0,
      },
      {
        band: 5,
        gain: -0.0125,
      },
      {
        band: 6,
        gain: -0.025,
      },
      {
        band: 7,
        gain: -0.0175,
      },
      {
        band: 8,
        gain: 0,
      },
      {
        band: 9,
        gain: 0,
      },
      {
        band: 10,
        gain: 0.0125,
      },
      {
        band: 11,
        gain: 0.025,
      },
      {
        band: 12,
        gain: 0.25,
      },
      {
        band: 13,
        gain: 0.125,
      },
      {
        band: 14,
        gain: 0.125,
      },
    ];
    client.bassboost = {
      none: client.defaultEQ,
      low: [
        {
          band: 0,
          gain: 0.0625,
        },
        {
          band: 1,
          gain: 0.125,
        },
        {
          band: 2,
          gain: -0.125,
        },
        {
          band: 3,
          gain: -0.0625,
        },
        {
          band: 4,
          gain: 0,
        },
        {
          band: 5,
          gain: -0.0125,
        },
        {
          band: 6,
          gain: -0.025,
        },
        {
          band: 7,
          gain: -0.0175,
        },
        {
          band: 8,
          gain: 0,
        },
        {
          band: 9,
          gain: 0,
        },
        {
          band: 10,
          gain: 0.0125,
        },
        {
          band: 11,
          gain: 0.025,
        },
        {
          band: 12,
          gain: 0.375,
        },
        {
          band: 13,
          gain: 0.125,
        },
        {
          band: 14,
          gain: 0.125,
        },
      ],
      medium: [
        {
          band: 0,
          gain: 0.125,
        },
        {
          band: 1,
          gain: 0.25,
        },
        {
          band: 2,
          gain: -0.25,
        },
        {
          band: 3,
          gain: -0.125,
        },
        {
          band: 4,
          gain: 0,
        },
        {
          band: 5,
          gain: -0.0125,
        },
        {
          band: 6,
          gain: -0.025,
        },
        {
          band: 7,
          gain: -0.0175,
        },
        {
          band: 8,
          gain: 0,
        },
        {
          band: 9,
          gain: 0,
        },
        {
          band: 10,
          gain: 0.0125,
        },
        {
          band: 11,
          gain: 0.025,
        },
        {
          band: 12,
          gain: 0.375,
        },
        {
          band: 13,
          gain: 0.125,
        },
        {
          band: 14,
          gain: 0.125,
        },
      ],
      high: [
        {
          band: 0,
          gain: 0.1875,
        },
        {
          band: 1,
          gain: 0.375,
        },
        {
          band: 2,
          gain: -0.375,
        },
        {
          band: 3,
          gain: -0.1875,
        },
        {
          band: 4,
          gain: 0,
        },
        {
          band: 5,
          gain: -0.0125,
        },
        {
          band: 6,
          gain: -0.025,
        },
        {
          band: 7,
          gain: -0.0175,
        },
        {
          band: 8,
          gain: 0,
        },
        {
          band: 9,
          gain: 0,
        },
        {
          band: 10,
          gain: 0.0125,
        },
        {
          band: 11,
          gain: 0.025,
        },
        {
          band: 12,
          gain: 0.375,
        },
        {
          band: 13,
          gain: 0.125,
        },
        {
          band: 14,
          gain: 0.125,
        },
      ],
      earrape: [
        {
          band: 0,
          gain: 0.25,
        },
        {
          band: 1,
          gain: 0.5,
        },
        {
          band: 2,
          gain: -0.5,
        },
        {
          band: 3,
          gain: -0.25,
        },
        {
          band: 4,
          gain: 0,
        },
        {
          band: 5,
          gain: -0.0125,
        },
        {
          band: 6,
          gain: -0.025,
        },
        {
          band: 7,
          gain: -0.0175,
        },
        {
          band: 8,
          gain: 0,
        },
        {
          band: 9,
          gain: 0,
        },
        {
          band: 10,
          gain: 0.0125,
        },
        {
          band: 11,
          gain: 0.025,
        },
        {
          band: 12,
          gain: 0.375,
        },
        {
          band: 13,
          gain: 0.125,
        },
        {
          band: 14,
          gain: 0.125,
        },
      ],
    };
    client.eqs = {
      music: client.defaultEQ,
      pop: [
        {
          band: 0,
          gain: -0.2,
        },
        {
          band: 1,
          gain: -0.1,
        },
        {
          band: 2,
          gain: 0,
        },
        {
          band: 3,
          gain: 0.1,
        },
        {
          band: 4,
          gain: 0.15,
        },
        {
          band: 5,
          gain: 0.25,
        },
        {
          band: 6,
          gain: 0.3,
        },
        {
          band: 7,
          gain: 0.35,
        },
        {
          band: 8,
          gain: 0.3,
        },
        {
          band: 9,
          gain: 0.25,
        },
        {
          band: 10,
          gain: 0.15,
        },
        {
          band: 11,
          gain: 0.1,
        },
        {
          band: 12,
          gain: 0,
        },
        {
          band: 13,
          gain: -0.1,
        },
        {
          band: 14,
          gain: -0.2,
        },
      ],
      electronic: [
        {
          band: 0,
          gain: 0.375,
        },
        {
          band: 1,
          gain: 0.35,
        },
        {
          band: 2,
          gain: 0.125,
        },
        {
          band: 3,
          gain: 0,
        },
        {
          band: 4,
          gain: 0,
        },
        {
          band: 5,
          gain: -0.125,
        },
        {
          band: 6,
          gain: -0.125,
        },
        {
          band: 7,
          gain: 0,
        },
        {
          band: 8,
          gain: 0.25,
        },
        {
          band: 9,
          gain: 0.125,
        },
        {
          band: 10,
          gain: 0.15,
        },
        {
          band: 11,
          gain: 0.2,
        },
        {
          band: 12,
          gain: 0.25,
        },
        {
          band: 13,
          gain: 0.35,
        },
        {
          band: 14,
          gain: 0.4,
        },
      ],
      classical: [
        {
          band: 0,
          gain: 0.375,
        },
        {
          band: 1,
          gain: 0.35,
        },
        {
          band: 2,
          gain: 0.125,
        },
        {
          band: 3,
          gain: 0,
        },
        {
          band: 4,
          gain: 0,
        },
        {
          band: 5,
          gain: 0.125,
        },
        {
          band: 6,
          gain: 0.55,
        },
        {
          band: 7,
          gain: 0.05,
        },
        {
          band: 8,
          gain: 0.125,
        },
        {
          band: 9,
          gain: 0.25,
        },
        {
          band: 10,
          gain: 0.2,
        },
        {
          band: 11,
          gain: 0.25,
        },
        {
          band: 12,
          gain: 0.3,
        },
        {
          band: 13,
          gain: 0.25,
        },
        {
          band: 14,
          gain: 0.3,
        },
      ],
      rock: [
        {
          band: 0,
          gain: 0.3,
        },
        {
          band: 1,
          gain: 0.25,
        },
        {
          band: 2,
          gain: 0.2,
        },
        {
          band: 3,
          gain: 0.1,
        },
        {
          band: 4,
          gain: 0.05,
        },
        {
          band: 5,
          gain: -0.05,
        },
        {
          band: 6,
          gain: -0.15,
        },
        {
          band: 7,
          gain: -0.2,
        },
        {
          band: 8,
          gain: -0.1,
        },
        {
          band: 9,
          gain: -0.05,
        },
        {
          band: 10,
          gain: 0.05,
        },
        {
          band: 11,
          gain: 0.1,
        },
        {
          band: 12,
          gain: 0.2,
        },
        {
          band: 13,
          gain: 0.25,
        },
        {
          band: 14,
          gain: 0.3,
        },
      ],

      full: [
        {
          band: 0,
          gain: 0.25 + 0.375,
        },
        {
          band: 1,
          gain: 0.25 + 0.025,
        },
        {
          band: 2,
          gain: 0.25 + 0.0125,
        },
        {
          band: 3,
          gain: 0.25 + 0,
        },
        {
          band: 4,
          gain: 0.25 + 0,
        },
        {
          band: 5,
          gain: 0.25 + -0.0125,
        },
        {
          band: 6,
          gain: 0.25 + -0.025,
        },
        {
          band: 7,
          gain: 0.25 + -0.0175,
        },
        {
          band: 8,
          gain: 0.25 + 0,
        },
        {
          band: 9,
          gain: 0.25 + 0,
        },
        {
          band: 10,
          gain: 0.25 + 0.0125,
        },
        {
          band: 11,
          gain: 0.25 + 0.025,
        },
        {
          band: 12,
          gain: 0.25 + 0.375,
        },
        {
          band: 13,
          gain: 0.25 + 0.125,
        },
        {
          band: 14,
          gain: 0.25 + 0.125,
        },
      ],
      gaming: [
        {
          band: 0,
          gain: 0.35,
        },
        {
          band: 1,
          gain: 0.3,
        },
        {
          band: 2,
          gain: 0.25,
        },
        {
          band: 3,
          gain: 0.2,
        },
        {
          band: 4,
          gain: 0.15,
        },
        {
          band: 5,
          gain: 0.1,
        },
        {
          band: 6,
          gain: 0.05,
        },
        {
          band: 7,
          gain: -0.0,
        },
        {
          band: 8,
          gain: -0.05,
        },
        {
          band: 9,
          gain: -0.1,
        },
        {
          band: 10,
          gain: -0.15,
        },
        {
          band: 11,
          gain: -0.2,
        },
        {
          band: 12,
          gain: -0.25,
        },
        {
          band: 13,
          gain: -0.3,
        },
        {
          band: 14,
          gain: -0.35,
        },
      ],

      bassboost: client.bassboost.medium,
      earrape: client.bassboost.earrape,
    };
  } catch (e) {
    console.log(String(e.stack).grey.bgRed);
  }
};
