const Command = require("./command_cls.js")

const Translatte = require("translatte")
const libretranslate_url = 'https://libretranslate.com';

class Translate extends Command
{
    async execution(command_content)
    {
        try {
            const response = await Translatte(command_content.msg, {to: 'es'});

            if (response && response.text) this.comfy.Say(`${response.text}`);
            else this.comfy.Say("No se pudo traducir.");
        }
        catch (error) {
            this.comfy.Say("Hubo este error al traducir: ", error);
        }
    }
}

module.exports = new Translate("t");