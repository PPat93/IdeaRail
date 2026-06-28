const sqlite3 = require(sqlite3).verbose();

// DB init
const db = new sqlite3.Database('./ideaDB.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS ideas (id INT, title TEXT, description TEXT, status INT)");
    db.run("CREATE TABLE IF NOT EXISTS progress (id INT, progress INT, estimation TEXT)");

    // TEMPORARY Data addition
    const dummyDataIdeas = db.prepare("INSERT INTO ideas VALUES (?, ?, ?, ?)");
    const dummyDataProgress = db.prepare("INSERT INTO progress VALUES (?, ?, ?)");

    // TEMPORARY Retrieve data
    const checkData = db.run("SELECT id FROM ideas");

    if (checkData.length < 0) {
        dummyDataIdeas.run(1, 'First idea', 'Some description of the first idea', 2);
        dummyDataProgress.run(1, 0, '2027-12-31');
        dummyDataIdeas.run(2, 'Idea number two', 'A long idea that needs a bit longer description, maybe some bullets would be good?', 2);
        dummyDataProgress.run(2, 0, '2027-05-12');

        dummyDataIdeas.finalize();
        dummyDataProgress.finalize();
    }
})

db.close();