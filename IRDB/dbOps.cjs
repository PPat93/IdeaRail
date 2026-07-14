const {db, dbInsertIdea, dbInsertProgress, dbUpdateIdea} = require("./dbUtils.cjs");

function retrieveDBData(ideaId) {
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

function createIdea(ideaObj) {
    const newIdentifier = "idea" + Date.now();
    db.serialize(() => {
        db.run(dbInsertIdea, [ideaObj.title, ideaObj.description, ideaObj.status, newIdentifier], function (err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log("New ID:", this.lastID);
        });
        db.run(dbInsertProgress, [ideaObj.progress, ideaObj.estimation], function (err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Progress added.");
        });

    })
}

function updateIdea(ideaId, ideaVals) {

    db.run(dbUpdateIdea, [ideaVals.title, ideaVals.description, ideaVals.status], function (err) {
        if (err) {
            console.error(err);
            return;
        }

        console.log("New ID:", this.lastID);
    });
}

module.exports = {
    retrieveDBData,
    createIdea,
    updateIdea
}