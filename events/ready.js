module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);

  let statuses = [
    "mhelp",
    "Music"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "LISTENING",
    });
  }, 1000);
};