// Creating server
const express = require("express")
const server = express()

// Configuring public folder
server.use(express.static("public"))

// Using template engine

// Configuring application paths 
// Home page
// Req: request
// Res: answer
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

// Connecting server
server.listen(3000)