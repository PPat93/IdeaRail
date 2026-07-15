const {db, dbInsertIdea, dbInsertProgress, dbUpdateIdea, dbUpdateProgress} = require("./dbUtils.cjs");

function retrieveDataDB(ideaId) {
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

function createIdeaDB(ideaObj) {
    const newIdentifier = "idea" + Date.now();
    return new Promise((resolve, reject) => {

        db.run("BEGIN TRANSACTION");

        db.run(dbInsertIdea, [ideaObj.title, ideaObj.description, ideaObj.status, newIdentifier], function (err) {
            if (err) {
                db.run("ROLLBACK");
                reject({
                    message: "Error creating idea.",
                    error: err
                });
            }
            db.run(dbInsertProgress, [ideaObj.progress, ideaObj.estimation, newIdentifier], function (err) {
                if (err) {
                    db.run("ROLLBACK");
                    reject({
                        message: "Error creating progress.",
                        error: err
                    });
                }

                db.run("COMMIT", (err) => {

                    if (err) {
                        db.run("ROLLBACK");
                        reject({
                            message: "Error commiting data during creation.",
                            error: err
                        });
                    }
                })

                resolve({
                    message: "New idea created.",
                    id: newIdentifier
                })
            });
        });
    });
}


function updateIdeaDB(ideaId, ideaVals, progressVals) {

    return new Promise((resolve, reject) => {

        db.run("BEGIN TRANSACTION");

        db.run(dbUpdateIdea, [ideaVals.title, ideaVals.description, ideaVals.status], function (err) {
            if (err) {
                db.run("ROLLBACK");
                reject({
                    message: "Idea update error.",
                    error: err
                });
            }

            db.run(dbUpdateProgress, [progressVals.progress, progressVals.estimation], function (err) {
                if (err) {
                    db.run("ROLLBACK");
                    reject({
                        message: "Progress update error.",
                        error: err
                    });
                }

                db.run("COMMIT", (err) => {

                    if (err) {
                        db.run("ROLLBACK");
                        reject({
                            message: "Error commiting data during update.",
                            error: err
                        });
                    }
                })

                resolve({
                    message: "Idea updated successfully.",
                    id: ideaId
                })
            })

        });
    })
}

module.exports = {
    retrieveDataDB,
    createIdeaDB,
    updateIdeaDB
}