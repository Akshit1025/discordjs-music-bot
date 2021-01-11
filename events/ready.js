module.exports = async (client) => {
    console.log(`[API] Logged in as ${client.user.username}`);
    await client.user.setActivity("Music and mhelp", {
      type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
    });
  };