const Command = require("./command_cls.js")

class Lurk extends Command
{
    execution(command_content)
    {
        this.comfy.Say(`${command_content.user}, gracias por el lurk. ¡Es de mucha ayuda!`);
    }
}

module.exports = new Lurk("lurk");