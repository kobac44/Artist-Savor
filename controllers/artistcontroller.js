//dependencies for express and artist models 
//controller routes the user expectation to database and view
const express = require("express");
const router = express.Router();
// Import the model (artists.js) to use its database functions.
const artist = require("../models/artists.js");

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
//adding an artists posting it to the database 
router.post('/api/artist', (req, res) => {
    artist.create(
        ['artistName', 'artist_address', 'artform', 'deposit'],
        [req.body.artistName, req.body.artist_address, req.body.artform, req.body.deposit],
        (result) => {
            res.json({ id: result.insertId });
        });
});



//updating api Artist by id to Painter 
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