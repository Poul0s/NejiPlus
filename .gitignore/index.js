onst Discord = require('discord.js');
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
