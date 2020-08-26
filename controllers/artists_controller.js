//dependencies for express and burger models 
//controller routes the user expectation to database and view
const express = require('express');
const artist = require("../models/artist");
const router = express.Router();
//requesting all objs from database to handlebars view
router.get('/', (req, res) => {
    Artists.selectOne((data) => {
        let hdbrsObj = {
            artist: data
        };

        res.render("index", hdbrsObj);
    });
});
//adding a burger by posting it to the database 
router.post('/api/artists', (req, res) => {
    Artists.insertOne(
        ['artistName', 'address', 'artform', 'deposit'],
        [req.body.artistName, req.body.address, req.body.artform, req.body.deposit],
        (result) => {
            res.json({ id: result.insertId });
        });
});
//updating api burger by id to devoured 
router.put('/api/artists/:id', (req, res) => {
    let condition = "id = " + req.params.id;

    Artists.updateOne({ deposit: req.body.deposit, withdrawl: req.body.withdrawl }, condition, (result) => {
        // If no rows were changed, then the ID must not exist, so 404
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});
//delete a burger from api id and removing from database and view
router.delete("/api/artists/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    Artist.delete(condition, (result) => {
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
