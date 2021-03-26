const express = require("express")
const server = express()
const routes = require("./routes")

//habilitar arquivos staticos
server.use(express.static("public"))

server.use(routes)

server.listen(3000, () => console.log('rodando'))