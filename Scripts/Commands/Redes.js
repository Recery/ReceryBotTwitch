const Command = require("./command_cls.js")

class Redes extends Command
{
    execution(command_content)
    {
        this.comfy.Say(`${command_content.user}, apoya a Recery en sus redes, ¡El streamer de este canal y mi creador!
            Twitter: x.com/_Recery, YouTube: youtube.com/@Recery, ko-fi: ko-fi.com/recery, Discord: https://discord.gg/npqD8GGW`)
    }
}

module.exports = new Redes("redes");