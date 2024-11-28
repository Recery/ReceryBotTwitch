const DB = require("better-sqlite3")
const Command = require("./command_cls.js")

class Pat extends Command
{
    execution(command_content)
    {
        const db = new DB(process.env.CONTADORES_DB_PATH);

        let rows = db.prepare("SELECT * FROM pats").all();
        let new_pats = 1;
        let add_row = true;

        for (const row of rows)
        {
            if (row.username === command_content.msg)
            {
                add_row = false;

                new_pats = row.pats + 1;
                db.prepare("UPDATE pats SET pats = ? WHERE id = ?").run(new_pats, row.id);
            }
        }

        if (add_row)
            db.prepare("INSERT INTO pats (username, pats) VALUES (?, ?)").run(command_content.msg, new_pats);

        if (new_pats > 1)
            this.comfy.Say(`${command_content.user} acarició la cabecita de ${command_content.msg}! ${command_content.msg} fue acariciad@ ${new_pats} veces!`);
        else
            this.comfy.Say(`${command_content.user} acarició la cabecita de ${command_content.msg}! ${command_content.msg} fue acariciad@ ${new_pats} vez!`);
    }
}

module.exports = new Pat("pat");