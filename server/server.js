const express = require('express')
const server = express()
const path = require('path')

server.use(express.static(path.join(__dirname, 'public')))
// server.use(express.static( 'public')) if public is in root directory
// Parses incoming json data requests: populates req.body requests
server.use(express.json())

module.exports = server