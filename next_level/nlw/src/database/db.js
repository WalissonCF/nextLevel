// Importing sqlite3 dependency
const sqlite3 = require("sqlite3").verbose()

// Creating database object
const db = new sqlite3.Database("./src/database/database.db")

// Using the database object for our operations
db.serialize(() => {
    // 1 - Creating a table
    db.run(`
        CREATE TABLE IF NOT EXIST places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // 2 - Inserting data into the tabel
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    
    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Electronic waste, lampandas"
    ]

    db.run(query, values, function() {
        
    })

    // 3 - Consult the data in the table
})