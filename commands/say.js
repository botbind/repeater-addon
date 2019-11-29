const { Command } = require("@botbind/klasa");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      permissionLevel: 6,
      runIn: ["text"],
      description: "Send a message to a channel through the bot.",
      usage: "[channel:channel] <message:...string>",
      usageDelim: " "
    });
  }

  async run(msg, [channel = msg.channel, message]) {
    if (channel.guild !== msg.guild) throw "You can't say in other servers!";
    if (!channel.postable) throw "The selected channel is not postable.";

    if (msg.deletable) msg.delete();
    return channel.send(message);
  }
};
