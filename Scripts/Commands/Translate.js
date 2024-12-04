const Command = require("./command_cls.js")

const Translatte = require("translatte")
const libretranslate_url = 'https://libretranslate.com';

class Translate extends Command
{
    valid_langs = ['en', 'es'];

    async execution(command_content)
    {
        const args = command_content.msg.split(' ');
        const target_lang = args[0];
        const text_to_translate = args.slice(1).join(' ');

        if (!this.valid_langs.includes(target_lang))
        {
            this.comfy.Say("Please choose a valid language.");
            return;
        }

        try {
            const response = await Translatte(text_to_translate, {to: target_lang});

            if (response && response.text) this.comfy.Say(`${response.text}`);
            else this.comfy.Say("No se pudo traducir.");
        }
        catch (error) {
            this.comfy.Say("Hubo este error al traducir: ", error);
        }
    }
}

module.exports = new Translate("t");