const Command = require("./command_cls.js")

class Bonk extends Command
{
    execution(command_content)
    {
        this.comfy.Say(`${command_content.user} bonkeó a ${command_content.msg} XD`);
    }
}

module.exports = new Bonk("bonk");