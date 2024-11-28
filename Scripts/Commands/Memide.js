const Command = require("./command_cls.js")

class Memide extends Command
{
    execution(command_content)
    {
        this.comfy.Say(`A ${command_content.user} le mide ${Math.floor((Math.random() * 30) + 1)} XD`);
    }
}

module.exports = new Memide("memide");