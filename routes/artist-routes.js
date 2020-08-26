const express = require('express');
const router = express.Router();
const db = require("./models");
const Artist = require('../models/Artist');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Display new artists form
router.get('/new', (req, res) => res.render('new'));

// Add a artist
router.post('/new', (req, res) => {
    let { artistName, address, artform, deposit } = req.body;
    let errors = [];

    // Validate Fields
    if (!artistName) {
        errors.push({ text: 'make sure to add your name to join the artist-savor' });
    }
    if (!address) {
        errors.push({ text: 'please submit your address' });
    }
    if (!artform) {
        errors.push({ text: 'please submit your type of art or instrument' });
    }
    if (!deposit) {
        errors.push({ text: 'How much are you depositing today?' });
    }


    // Check for errors
    if (errors.length > 0) {
        res.render('add', {
            errors,
            artistName,
            address,
            artform,
            deposit,
        });
    }
    else {
        res.redirect("/members");
    }


    // add artist to table
    Artist.create({
        artistName,
        account,
        deposit
    })
        .then(artist => res.redirect('/artists'))
        .catch(err => res.render('error', { error: err.message }))
});
//remember to redirect back to members page

// // find one artist
router.get('/search', (req, res) => {
    let { term } = req.query;


    term = term.toLowerCase();

    Artists.findOne({ where: { account: { [Op.like]: '%' + term + '%' } } })
        .then(artists => res.render('artists', { artist }))
        .catch(err => res.render('error', { error: err }));
});

module.exports = router;
