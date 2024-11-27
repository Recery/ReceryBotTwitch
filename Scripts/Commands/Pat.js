const Command = require("./command_cls.js")

class Pat extends Command
{
    execution(command_content)
    {
        this.comfy.Say(`${command_content.user} acarició la cabecita de ${command_content.msg}!`);
    }
}

module.exports = new Pat("pat");