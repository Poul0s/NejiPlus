const Discord = require('discord.js');
const bot = new Discord.Client()

var prefix = ('/')

bot.on('ready', function () {
    // bot.user.setAvatar('./avatar.png').catch(console.error)
    //bot.user.setActivity({name: "use /help", type: "STREAMING", url: "https://www.twitch.tv/realnejibot"}).catch(console.error)
    //.then(() => console.log('setactivity reussi'))
    bot.user.setActivity(`use /help | ${bot.guilds.size} serveurs `, { type: 'STREAMING', url: 'https://www.twitch.tv/realnejibot' }).then(() => console.log('setActivity reussi'))
    bot.user.setUsername('Neji+').catch(console.error)
        .then(() => console.log('setusername mis en place'))
    bot.user.setStatus("dnd")
});

bot.on('message', async message =>  {
    let blacklist2 = ['fdp', 'nike ta mère', 'pute', 'salope', 'connard', 'ntm'];

    let motbl = false;
    for (var i in blacklist2) {
        if (message.content.toLowerCase().includes(blacklist2[i].toLowerCase())) motbl = true;
    }
    if(motbl) {
        message.delete();
        message.channel.send('Désolé mais tu ne peux pas envoyé ce type de message.')
    }
})

bot.login(process.env.TOKEN)

bot.on("message", message => {
    if(message.content.startsWith("-list")) {
        let list = message.guild.memberCount
        message.channel.send(list)
    }
    let list = message.guild.memberCount
    let list2 = (`Utilisateur total: ${list}`)
    if(list2 === message.guild.channels.find("id", "580090821366513664").name){}else  message.guild.channels.find("id", "580090821366513664").edit({ name: list2 })
    
})

bot.on("message", message => {
    if(message.content.startsWith("test")) {
        message.channel.send("/role <@155149108183695360> yop")
    }
})


//--------------------------------------------------------------------------------------------------------------------------------

const botcn = new Discord.Client
botcn.login(process.env.TOKENCN)
var prefixcn = ("/")

botcn.on("message", message => {
var auth = message.author
    if(message.content.startsWith(prefixcn + "report")){
        const reportmember = message.mentions.members.first();
        if (!reportmember) return message.reply("Tu n'as pas mentionner d'utilisateur.");
        let args1 = message.content.split(" " + reportmember + " ").slice(1);
        let args2 = args1
        if(!args2) return message.reply("tu n'as pas mis de raison pour ton avertissement");
        var auth = message.author
        message.guild.channels.find("name", "💥discussion-staff💥").send(`${auth} a report ${reportmember} dans le channel ${message.channel.name} pour: ${args2}`)
        message.channel.send("Merci pour ton report, n'oublie pas de screen si jamais un modérateur te le demande")
        
        return;
    }
})
