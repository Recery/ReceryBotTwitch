const DB = require("better-sqlite3")
const Command = require("./command_cls.js")

class Pez extends Command
{
    execution(command_content)
    {
        const db = new DB(process.env.CONTADORES_DB_PATH);

        let rows = db.prepare("SELECT * FROM promediopez").all();

        let add_row = true;
        let porcentaje = Math.floor(Math.random() * 100 + 1);
        let promedio = porcentaje;

        for (const row of rows)
        {
            if (row.username === command_content.msg)
            {
                add_row = false;

                promedio = (porcentaje + row.promedio) / 2;
                db.prepare("UPDATE promediopez SET promedio = ? WHERE id = ?").run(promedio, row.id);
            }
        }

        if (add_row)
            db.prepare("INSERT INTO promediopez (username, promedio)").run(command_content.msg, promedio);

        this.comfy.Say(`${command_content.user}, eres un ${porcentaje}% pez. 
            En promedio eres un ${promedio} pez.`);
    }
}

module.exports = new Pez("pez");