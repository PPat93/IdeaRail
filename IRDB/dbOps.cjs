import {db, dbInsertIdea, dbInsertProgress} from "./dbUtils.cjs";

export function retrieveDBData(ideaId) {
    let retrievedDataArg = "";
    if (typeof ideaId !== "undefined") {
        retrievedDataArg = " WHERE identifier = " + ideaId;
    }

    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM ideas" + retrievedDataArg, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        })
    });
}

export function createIdea(ideaObj) {
    const newIdentifier = "idea" + Date.now();
    db.run(dbInsertIdea, [ideaObj.title, ideaObj.description, ideaObj.status, newIdentifier], function (err) {
        if (err) {
            console.error(err);
            return;
        }

        console.log("New ID:", this.lastID);
    });
}
