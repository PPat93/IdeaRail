const {
    db,
    dbInsertIdea,
    dbInsertProgress,
    dbUpdateIdea,
    dbUpdateProgress,
    dbDeleteIdea,
    dbDeleteProgress,
    dbRollback
} = require("./dbUtils.cjs");

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
                dbRollback();
                reject({
                    message: "Error creating idea.",
                    error: err
                });
            }
            db.run(dbInsertProgress, [ideaObj.progress, ideaObj.estimation, newIdentifier], function (err) {
                if (err) {
                    dbRollback();
                    reject({
                        message: "Error creating progress.",
                        error: err
                    });
                }

                db.run("COMMIT", (err) => {

                    if (err) {
                        dbRollback();
                        reject({
                            message: "Error commiting data during creation commit.",
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
                dbRollback();
                reject({
                    message: "Idea update error.",
                    error: err
                });
            }

            db.run(dbUpdateProgress, [progressVals.progress, progressVals.estimation], function (err) {
                if (err) {
                    dbRollback();
                    reject({
                        message: "Progress update error.",
                        error: err
                    });
                }

                db.run("COMMIT", (err) => {

                    if (err) {
                        dbRollback();
                        reject({
                            message: "Error commiting data during update commit.",
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

function deleteIdeaDb(ideaId) {
    return new Promise((resolve, reject) => {
        db.run("BEGIN TRANSACTION");

        db.run(dbDeleteIdea, [ideaId], function (err) {
            if (err) {
                dbRollback();
                reject({
                    message: "Error while deleting idea.",
                    error: err
                })
            }

            db.run(dbDeleteProgress, [ideaId], function (err) {
                if (err) {
                    dbRollback();
                    reject({
                        message: "Error while deleting progress.",
                        error: err
                    })
                }

                db.run("COMMIT", (err) => {

                    if (err) {
                        dbRollback();
                        reject({
                            message: "Error commiting data during deletion commit.",
                            error: err
                        });
                    }
                })

                resolve({
                    message: "Idea deleted successfully.",
                    id: ideaId
                })
            })
        })
    })
}

module.exports = {
    retrieveDataDB,
    createIdeaDB,
    updateIdeaDB,
    deleteIdeaDb
}