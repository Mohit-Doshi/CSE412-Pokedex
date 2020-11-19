//Creates a connection to the database
const pgp = require('pg-promise')()
const connectionString = "postgres://postgres:postgres@pokedex-database.cqonc8g32pxo.us-east-2.rds.amazonaws.com"

const db = pgp(connectionString)

module.exports = db;