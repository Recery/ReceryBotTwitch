const ComfyJS = require("comfy.js");

// Representa un comando que se ejecuta
class Command 
{
    constructor(init_activator)
    {
        this.activator = init_activator;
        this.comfy = ComfyJS;
    }

    check_activation(activator)
    {
        return this.activator === activator;
    }

    execution(command_content){}
}

module.exports = Command;