const Command = require("./command_cls.js")

const fetch = require("node-fetch")
const libretranslate_url = 'https://libretranslate.com';

class Translate extends Command
{
    async execution(command_content)
    {
        const response = await fetch(`${libretranslate_url}/translate`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                q: command_content.msg,
                source: 'en',
                target: 'es',
                format: 'text',
            }),
        });

        const data = await response.json();

        this.comfy.Say(`${data.translatedText}`);
    }
}

module.exports = new Translate("t");