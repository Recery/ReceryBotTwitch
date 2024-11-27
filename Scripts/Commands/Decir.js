const Command = require("./command_cls.js")

class Decir extends Command
{
    execution(command_content)
    {
        this.comfy.Say(command_content.msg);
    }
}

module.exports = new Decir("decir");