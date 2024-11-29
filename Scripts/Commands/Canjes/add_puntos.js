const DB = require("better-sqlite3")
const ComfyJS = require ("comfy.js");

let active_users = []

ComfyJS.onJoin = (user, self, extra) => {
    if (!active_users.includes(user)) active_users.push(user);
}

ComfyJS.onPart = (user, self, extra) => {
    const index = active_users.indexOf(user)
    if (index !== -1) active_users.splice(index, 1);
}

const db = new DB(process.env.CANJES_DB_PATH);
function add_points()
{
    let rows = db.prepare("SELECT * FROM puntos").all();

    for (const user of active_users)
    {
        let add_row = true;
        for (const row of rows)
        {
            if (row.username === user)
            {
                add_row = false;
                db.prepare("UPDATE puntos SET puntos = ? WHERE id = ?").run(row.puntos + 10, row.id);
            }
        }

        if (add_row)
            db.prepare("INSERT INTO puntos (username, puntos) VALUES (?, ?)").run(user, 10);
    }
}

setInterval(add_points, 30000/*0*/);