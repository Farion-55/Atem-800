const Discord = require("discord.js")

const TOKEN = "OTgxMjY5NjA4OTEwNjk2NDY4.GXJxXM.wYQQXpuIo7kEI0ZK15dvYNjA_XBDVMAPZk6THQ"

const client = new Discord.Client({ 
    intents: [ 
        "GUILDS",
        "GUILD_MESSAGES"
      ]
    })

  client.on("ready", () => { 
    console.log('Logged in as ${client.user.tag}')
    })
client.login(TOKEN)