import db from "../IRDB/dbInit";

export function retrieveDBData(ideaId) {
    let retrievedDataArg = "";
    if (typeof ideaId !== "undefined") {
        retrievedDataArg = " WHERE identifier = " + ideaId;
    }

    return db.run("SELECT * FROM ideas" + retrievedDataArg);
}
