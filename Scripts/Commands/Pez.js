const Command = require("./command_cls.js")

class Pez extends Command
{
    execution(command_content)
    {
        this.comfy.Say(`${command_content.user} es un ${Math.floor(Math.random() * 100 + 1)}% pez`);
    }
}

module.exports = new Pez("pez");