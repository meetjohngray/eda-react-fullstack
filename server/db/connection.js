// Put this in one file because these lines would otherwise be needed
// every file that interacts with the db

const knex = require('knex')
const config = require('./knexfile')
// Determine which environment we're using, if none specified use development
const env = process.env.NODE_ENV || 'development'
// Configure the db connection
// Get the right configs from knexfile.js based on which env we are using
const connection = knex(config[env])

module.exports = connection