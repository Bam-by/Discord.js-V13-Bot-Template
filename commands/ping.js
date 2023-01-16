module.exports = {
    config: {
        name: 'ping',
        description: 'Consigues el ping del bot.',
        usage: `!ping`,
    },
    async run (bot,message,args) {
        message.channel.send("Pong! Tengo \`" + bot.ws.ping + " ms.\`");
    }
}
