const sqlite3 = require("sqlite3").verbose();

let db;

const dbInsertIdea = "INSERT INTO ideas(title, description, status, identifier)  VALUES(?, ?, ?, ?)";
const dbInsertProgress = "INSERT INTO progress(progress, estimation) VALUES (?, ?)";
const dbUpdateIdea = "UPDATE ideas SET title = ?, description = ?, status = ? WHERE identifier = ?";


// DB init
function dbInit() {
    db = new sqlite3.Database('./ideaDB.db');

    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS ideas (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, status INT, identifier TEXT)");
        db.run("CREATE TABLE IF NOT EXISTS progress (id INTEGER PRIMARY KEY AUTOINCREMENT, progress INT, estimation TEXT)");

        // TEMPORARY Data addition
        const dummyDataIdeas = db.prepare(dbInsertIdea);
        const dummyDataProgress = db.prepare(dbInsertProgress);

        // TEMPORARY Retrieve data
        const checkData = () => {
            db.get("SELECT id FROM ideas", (err, rows) => {

                if (rows === undefined) {
                    dummyDataIdeas.run('First idea', 'Some description of the first idea', 2, 'idea' + Date.now());
                    dummyDataProgress.run(0, '2027-12-31');
                    dummyDataIdeas.run('Idea number two', 'A long idea that needs a bit longer description, maybe some bullets would be good?', 2, 'idea' + (Date.now() + 1));
                    dummyDataProgress.run(0, '2027-05-12');

                    dummyDataIdeas.finalize();
                    dummyDataProgress.finalize();
                }
            })

        };
        checkData()
    })
}

module.exports = {
    db,
    dbInsertIdea,
    dbUpdateIdea,
    dbInsertProgress,
    dbInit,
}