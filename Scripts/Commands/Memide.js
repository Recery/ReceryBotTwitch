const Command = require("./command_cls.js")

class Memide extends Command
{
    execution(command_content)
    {
        let tamano = Math.floor((Math.random() * 30) + 1);

        if (tamano <= 10)
            this.comfy.Say(`A ${command_content.user} le mide ${tamano}cm, tremendo pito corto XD`);
        else if (tamano <= 20)
            this.comfy.Say(`A ${command_content.user} le mide ${tamano}cm... `);
        else
            this.comfy.Say(`A ${command_content.user} le mide ${tamano}cm... donde esconde semejante bestia?!`);
    }
}

module.exports = new Memide("memide");