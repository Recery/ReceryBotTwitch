const fetch = require("node-fetch");
const Command = require("./command_cls.js");

class Titulo extends Command
{
    async execution(command_content) {
        return;
        const newTitle = command_content.msg;
        if (!newTitle) return;
        
        const id = "772673970"
        const response = await fetch(`https://api.twitch.tv/helix/channels?broadcaster_id=${id}`, {
            method: "PATCH", 
            headers: {
                "Client-ID": "1xsyw6xxzqdxpp5skdxxm9wxxxtfcyyo",
                "Authorization": `Bearer ${process.env.TOKEN_RECERY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: newTitle
            })
        })

        if (response.ok) {
            this.comfy.Say(`Título cambiado a ${newTitle} con éxito.`)
        }
        else {
            const error = await response.json();
            console.error("Error al cambiar el título:", error);
        }
    }
}

module.exports = new Titulo("titulo");