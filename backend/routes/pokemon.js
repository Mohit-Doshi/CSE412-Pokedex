const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
    db.any("SELECT DISTINCT * FROM pokemon INNER JOIN pokemonimages ON UPPER(pokemon.pokemonname) = UPPER(pokemonimages.pokemonname);")
        .then(rows => {
            console.log(rows.slice(0,1));   //log first result to confirm response is correct
            res.json(rows.slice(0,100));
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = router