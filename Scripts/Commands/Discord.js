const Command = require("./command_cls.js")

class Discord extends Command
{
    execution(command_content)
    {
        this.comfy.Say(`¡Ya tenemos servidor de Discord! Únete al estanque de Recery: https://discord.gg/npqD8GGW`);
    }
}

module.exports = new Discord("discord");