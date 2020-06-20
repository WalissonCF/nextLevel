// Importing sqlite3 dependency
const sqlite3 = require("sqlite3").verbose()

// Creating database object
const db = new sqlite3.Database("./src/database/database.db")

// Export arq
module.exports = db

// Using the database object for our operations
db.serialize(() => {
    // 1 - Creating a table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2 - Inserting data into the tabel
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    
    // const values = [
    //     "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Electronic waste, lampandas"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Successful registration")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // 3 - Consult the data in the table
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Here are your records")
    //     console.log(rows)
    // })

    // 4 - Delect data
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Record successfully deleted")
    // })

})