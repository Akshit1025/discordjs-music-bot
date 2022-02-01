module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  DefaultPrefix: ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/a9SHDpD", //Support Server Link
  Token: "", //Discord Bot Token
  ClientID: "", //Discord Client ID
  ClientSecret: "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  CookieSecret: "Music AI", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/Akshit1025/discordjs-music-bot/master/assets/Music.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: "http://localhost", //Website where it was hosted at includes http or https

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    host: "lavalink.eu",
    port: 2333,
    pass: "Raccoon",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "", //Spotify Client ID
    ClientSecret: "", //Spotify Client Secret
  },
};