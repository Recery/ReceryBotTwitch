const DB = require("better-sqlite3");
const Command = require("./command_cls.js");

class Memide extends Command
{
    execution(command_content)
    {
        const db = new DB(process.env.CONTADORES_DB_PATH);
        
        let rows = db.prepare("SELECT * FROM promediomemide").all();
        let add_row = true;
        let tamano = Math.floor((Math.random() * 30) + 1);
        let promedio = tamano;

        for (const row of rows)
        {
            if (row.username === command_content.user)
            {
                add_row = false;
                
                promedio = (tamano + row.promedio) / 2;
                db.prepare("UPDATE promediomemide SET promedio = ? where id = ?").run(promedio, row.id);
            }
        }

        if (add_row)
            db.prepare("INSERT INTO promediomemide (username, promedio) VALUES (?, ?)").run(command_content.user, promedio)

        if (promedio <= 10)
            this.comfy.Say(`${command_content.user}, te mide ${tamano}cm. En promedio te mide ${promedio}cm, tremendo pito corto XD`);
        else if (promedio <= 20)
            this.comfy.Say(`${command_content.user}, te mide ${tamano}cm. En promedio te mide ${promedio}...`);
        else
            this.comfy.Say(`${command_content.user}, te mide ${tamano}cm... En promedio te mide ${promedio}cm, donde escondes semejante bestia?!`);
    }
}

module.exports = new Memide("memide");