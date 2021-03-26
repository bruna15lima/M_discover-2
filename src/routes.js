const express = require('express');
const routes = express.Router()

//request, response
routes.get('/', (request, response) => response.sendFile(__dirname + "/views/index.html"))
routes.get('/job', (request, response) => response.sendFile(__dirname + "/views/job.html"))
routes.get('/job/edit', (request, response) => response.sendFile(__dirname + "/views/job-edit.html"))
routes.get('/profile', (request, response) => response.sendFile(__dirname + "/views/profile.html"))

module.exports = routes;