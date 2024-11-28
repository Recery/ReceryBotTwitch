const DB = require("better-sqlite3")
const Command = require("./command_cls.js")

class Bonk extends Command
{
    execution(command_content)
    {
        const db = new DB(process.env.CONTADORES_DB_PATH);

        let rows = db.prepare("SELECT * FROM bonks").all();
        let new_bonks = 1;
        let add_row = true;

        for (const row of rows)
        {
            if (row.username === command_content.msg)
            {
                add_row = false;

                new_bonks = row.bonks + 1;
                db.prepare("UPDATE bonks SET bonks = ? WHERE id = ?").run(new_bonks, row.id);
            }
        }

        if (add_row) // No hay datos de antes de este usuario, hay que agregarlos...
        {
            db.prepare("INSERT INTO bonks (username, bonks) VALUES (?, ?)").run(command_content.msg, new_bonks);
        }

        if (new_bonks > 1)
            this.comfy.Say(`${command_content.user} bonkeó a ${command_content.msg} ${new_bonks} veces XD`);
        else
            this.comfy.Say(`${command_content.user} bonkeó a ${command_content.msg} ${new_bonks} vez XD`);
    }
}

module.exports = new Bonk("bonk");