module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
        //Envia un log sobre en cuantos servidores se encuentra el bot a la consola.
        console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

        //Presencia del bot
        bot.user.setPresence({ activities: [{ name: 'made by akacannon#8821'}] });
    }
}
