module.exports = {
    name: 'guildMemberAdd',
    execute(member, bot) {
        //Envía un log de los usuarios que se unen al servidor a la consola.
        console.log('' + member.user.tag + ' se unió al servidor!');

        //Busca un canal llamado "welcome" y manda el mensaje.
        member.guild.channels.cache.find(c => c.name === "welcome").send('bienvenido '+ member.user.username)
    }
}