const Command = require("./command_cls.js")

class Hola extends Command
{
    execution(command_content)
    {
        this.comfy.Say(`Hola ${command_content.user}! Bienvenido al stream TheIlluminati`);
    }
}

module.exports = new Hola("hola");