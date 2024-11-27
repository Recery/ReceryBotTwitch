const fs = require("fs");
const path = require("path");   

const commands_path = path.join(__dirname, "Commands");
const command_files = fs.readdirSync(commands_path).filter(file => file.endsWith(".js"));

const available_commands = [];

for (const file of command_files)
{
    if (file != "command_cls.js")
    {
        const command = require("./Commands/" + file)
        available_commands.push(command);
    }
}

module.exports = available_commands;