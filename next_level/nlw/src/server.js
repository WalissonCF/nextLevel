// Creating server
const express = require("express")
const server = express()

// Configuring public folder
server.use(express.static("public"))

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
    return res.render("index.html", { title: "Titulo"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-result.html")
})

// Connecting server
server.listen(3000)

// 01:11:35