// Creating server
const express = require("express")
const server = express()

// Capturing data base
const db = require("./database/db")

// Configuring public folder
server.use(express.static("public"))

// Enabling req.doby in our application
server.use(express.urlencoded({ extended: true }))

// Using template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configuring application paths 
// Home page
// Req: request
// Res: answer
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    // req.query: Query string of our url
    // console.log(req.query)
    // req.query

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    // req.body: The body of our form
    // console.log(req.body)

    // Inserting data into the database
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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Successful registration")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
    
})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        // Empty search
        return res.render("search-results.html", { total: 0})
    }

    // Getting data from database
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // console.log("Here are your records")
        // console.log(rows)

        // Showing the html page with the data
        return res.render("search-results.html", { places: rows, total: total})
    })  
})

// Connecting server
server.listen(3000)
