const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
    db.any("SELECT * FROM pokemon")
        .then(rows => {
            console.log(rows.slice(0,10))
            res.json(rows.slice(0,10));
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = router