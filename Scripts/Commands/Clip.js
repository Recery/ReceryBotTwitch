const Command = require("./command_cls.js");
const fetch = require("node-fetch");

class Clip extends Command
{
    async execution(command_content)
    {
        const url = `https://api.thefyrewire.com/twitch/clips/create/fcc76804b0b8bd62be0a9d189135cb1d?channel=${command_content.extra.channel}`;

        try {
            const response = await fetch(url);
            const clipurl = await response.text();

            if (response.ok)
                this.comfy.Say(`¡El clip ha sido creado! Este es el link: ${clipurl}`);
            else
                this.comfy.Say("Hubo un error al generar el clip. XD");
        }
        catch (error)
        {
            console.error("Hubo un error al generar el clip: ", error);
            this.comfy.Say("Hubo un error tremendo al generar el clip.");
        }
    }
}

module.exports = new Clip("clip");