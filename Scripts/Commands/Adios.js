const Command = require("./command_cls.js")

class Adios extends Command
{
    execution(command_content)
    {
        this.comfy.Say(`Nos vemos ${command_content.user}, ¡Gracias por pasar por el stream!`);
    }
}

module.exports = new Adios("adios");