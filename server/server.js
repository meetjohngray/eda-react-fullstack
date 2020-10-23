const express = require('express')
const server = express()
const path = require('path')
const productRoutes = require('./routes/products')

server.use(express.static(path.join(__dirname, 'public')))
// server.use(express.static( 'public')) if public is in root directory
// Parses incoming json data requests: populates req.body requests
server.use(express.json())

server.use('/api/products', productRoutes)

module.exports = server 