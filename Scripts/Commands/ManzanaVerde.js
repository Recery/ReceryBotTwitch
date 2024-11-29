const DB = require("better-sqlite3");
const Command = require("./command_cls");

class Manzanaverde extends Command
{
    db = new DB(process.env.CANJES_DB_PATH);

    execution(command_content)
    {
        let rows = this.db.prepare("SELECT * FROM puntos").all();
        for (const row of rows)
        {
            // En este caso en especifico, el nombre tiene que estar todo en minuscula para compararlos
            // En la base de datos se guarda todo en minuscula y queremos compararlo con eso
            if (row.username === command_content.user.toLowerCase())
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