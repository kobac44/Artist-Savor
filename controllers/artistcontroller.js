// dependencies for express and artist models
// controller routes the user expectation to database and view
const express = require("express");
const router = express.Router();
// Import the model (artists.js) to use its database functions.
const artist = require("../models");


// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");



//requesting all objs from database to handlebars view
router.get('/', (req, res) => {
    artist.findAll((data) => {
        let hdbrsObj = {
            artist: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });
});
router.get('/search', (req, res) => {
    let { itemSearched } = req.query;

    artist.findOne({ where: { artistName: { itemSearched } } }).then(artist => res.render('account', { Artist })).catch(err => res.render('error', { error: err }));
});
//adding an artists posting it to the database 

router.post('/api/artist', (req, res) => {
    let { artistName, artist_address, artform, deposit } = req.body;
    let errors = [];

    // Validate Fields
    if (!artistName) {
        errors.push({ text: 'Please add your name' });
    }
    if (!artist_address) {
        errors.push({ text: 'Please add your address' });
    }
    if (!artform) {
        errors.push({ text: 'What is your talent' });
    }
    if (!deposit) {
        errors.push({ text: 'Please add a contact email' });
    }

    // Check for errors
    if (errors.length > 0) {
        res.render('new', {
            errors,
            artistName, artist_address, artform, deposit
        });
    } else {
        if (!deposit) {
            deposit = 0.00;
        } else {
            deposit = `$${deposit}`;
        }



        // Insert into table
        artist.create({
            artistName, artist_address, artform, deposit
        })
            .then(artist => res.redirect('/index'))
            .catch(err => res.render('error', { error: err.message }))
    }
});


//updating api Artist by id  
router.put('/api/artist/:id', (req, res) => {
    let condition = "id = " + req.params.id;
    artist.update({ balance: req.body.deposit }, condition, (result) => {
        // If no rows were changed, then the ID must not exist, so 404
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});
//delete a artists from api id and removing from database and view
router.delete("/api/artist/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    artist.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
//exports router to server
module.exports = router;