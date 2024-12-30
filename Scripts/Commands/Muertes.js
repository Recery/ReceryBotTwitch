const DB = require("better-sqlite3");
const Command = require("./command_cls.js");

class Muertes extends Command
{
    execution(command_content) {
        // Comando para que los espectadores puedan ver las muertes en determinado juego

        const juego = command_content.msg.toLowerCase();

        if (!juego) {
            this.comfy.Say(`${user}, debes ingresar el juego del que deseas consultar las muertes...`);
            return;
        }

        const db = new DB(process.env.CONTADORES_DB_PATH);
        const row = db.prepare("SELECT amount FROM muertes WHERE juego = ?").get(juego);

        if (!row) {
            this.comfy.Say(`${user}, no hay muertes en ese juego... ¿Incluso acaso es un juego eso?`);
            return;
        }

        this.comfy.Say(`${command_content.user}, ¡Recery tiene ${row.muertes} en ${juego}!`);
    }
}

module.exports = new Muertes("muertes");