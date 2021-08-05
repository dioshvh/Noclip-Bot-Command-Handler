// NOCLIP BOT BY Z //
//  NO COPY & PASTE    //
//   FREE DOWNLOAD ?¿  //

const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const fs = require("fs");
const discord = require("discord.js")
const client = new Client({
    disableEveryone: true
})
client.commands = new discord.Collection()
client.queue = new Map();
client.vote = new Map();
client.commands = new Collection();
client.aliases = new Collection();
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})

//Estado del bot

client.once('ready', () => {
console.log('NoClip ON');
let statuses = [
'[🎬] by nosoyz#1000',
'[🛠] uwu',
`[💿] ${client.users.cache.size} Usuarios`,
`[📀] ${client.guilds.cache.size} Servidores`
];
setInterval(function() {
let status = statuses[Math.floor(Math.random() * statuses.length)];
client.user.setActivity(status, { type: 'WATCHING' });
}, 5000);
})

client.on("message", async message => {

  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (!message.content.startsWith(prefix)) return;

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) 
    command.run(client, message, args);

    return addexp(message)
})
});


client.login(token);

// NOCLIP BOT BY Z //
//  NO COPY & PASTE    //
//   FREE DOWNLOAD ?¿  //
