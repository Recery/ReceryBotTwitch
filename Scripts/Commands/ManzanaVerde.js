const DB = require("better-sqlite3");
const Command = require("./command_cls");

class Manzanaverde extends Command
{
    db = new DB(process.env.CANJES_DB_PATH);

    execution(command_content)
    {
        let rows = this.db.prepare("SELECT * FROM puntos").all();
        console.log(command_content.user, " ejecuto esto")
        for (const row of rows)
        {
            console.log(row.username)
            if (row.username === command_content.user)
            {
                if (row.puntos > 0)
                {
                    this.comfy.Say(`${command_content.user}, tienes ${row.puntos}🍏`)
                    return;
                }
            }
        }

        this.comfy.Say(`${command_content.user}, no tienes ninguna 🍏...`)
    }
}

module.exports = new Manzanaverde("manzanaverde");