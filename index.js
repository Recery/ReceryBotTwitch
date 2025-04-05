require('dotenv').config();
const ComfyJS = require("comfy.js");
const available_commands = require("./Scripts/available_commands.js");
const timed_message = require("./Scripts/TimedMessage.js");

ComfyJS.onCommand = (user, activator, msg, flags, extra) => {
    let command_content = {user: user, activator: activator, msg: msg, flags: flags, extra: extra};
    
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    if (urlRegex.test(msg))
    {
        ComfyJS.Say(`${user}, no puedo generar interacciones que contengan enlaces no autorizados por mi creador.`);
        return;
    }

    for (const command of available_commands)
    {
        if (command.check_activation(activator))
        {
            command.execution(command_content);
            break;
        }
    }

    if (activator === "comandos")
    {
        let text = `${user}, estos son mis comandos: !comandos`
        for (const command of available_commands)
        {
            text += ", !" + command.activator;
        }
        
        ComfyJS.Say(text);
    }
}

/*
ComfyJS.onJoin = (user, self, extra) => {
    if (user === "recerybot") return;

    ComfyJS.Say(`¡Hola ${user}, bienvenid@ al stream! Usa !comandos para ver mi lista de comandos disponibles.`)
}
*/

ComfyJS.onRaid = (user, viewers, extra) => {
    ComfyJS.Say(`${user} acabó de traer a ${viewers} pecesitos para el cardumen! Vayan a seguirl@ en su canal: https://twitch.tv/${user}`);
}

ComfyJS.onConnected = (address, port, isFirstConnect) => {
    if (!isFirstConnect) return;
    
    const text = "Soy Recery Bot y estoy acá para hacerle el trabajo a mi papá Recery... Si querés conocer mis comandos, escribí !comandos. Usa !redes para apoyar a mi papá por todos lados. Únete a nuestro servidor de Discord, el estanque de Recery: https://discord.gg/npqD8GGW";
    timed_message.timed_message(text, 1800000);
}

ComfyJS.Init("ReceryBot", process.env.OAUTH, "Recery_");
