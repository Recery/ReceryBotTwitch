const DB = require("better-sqlite3");
const Command = require("./command_cls.js");

class Muertes extends Command
{
    execution(command_content) {
        // Comando para que los mods o el streamer puedan agregar una muerte al contador
        if (!command_content.flags.broadcaster && !command_content.flags.mod) return;

        let muertes = 1;
        const juego = command_content.message;

        const db = new DB(process.env.CONTADORES_DB_PATH);
        const row = db.prepare("SELECT amount FROM muertes WHERE juego = ?").get(juego);

        if (!row)
            db.prepare("INSERT INTO muertes (amount, juego) VALUES (?, ?)").run(1, juego);
        else {
            muertes = row.amount + 1;
            db.prepare("UPDATE muertes SET amount = ? WHERE juego = ?").run(muertes, juego);
        }

        this.comfy.Say(`${command_content.user}, se ha sumado una muerte en ${juego} a Recery. ¡Ahora tiene ${muertes}!`);

    }
}

module.exports = new Muertes("muertes");