const express = require('express');
const router = express.Router();
const db = require("./models");


// Add a artist
module.exports = function (app) {
    app.get('/api/artist', (req, res, next) => {
        db.Artist.findAll({
            include: [db.Transaction]
        }).then(function (dbArtist) {
            res.json(dbArtist);
        });
    });
    app.post('/api/artist', function (req, res) {
        db.Artist.create(req.body).then(function (dbArtist) {
            res.json(dbArtist);
        });
    });

    app.get("/api/artist/:id", (req, res, next) => {
        db.Artist.findOne({
            where: { id: req.params.id },
            include: [db.Transaction]
        }).then(function (dbpassport_demo) {
            res.json(dbpassport_demo);
        });
    });
    app.get("/api/transaction/balance", (req, res, next) => {
        db.Transaction.sum({
            where: {
                balance: req.params.balance
            },
            include: [db.Artist]
        }).then(function (dbpassport_demo) {
            res.json(dbpassport_demo);
        });
    });
    app.put("/api/transaction", (req, res, next) => {
        db.Transaction.update({
            where: {
                balance: req.body.deposit
            },
        }).then(function (dbpassport_demo) {
            res.json(dbpassport_demo);
        });
    });
    //delete a artists from api id and removing from database and view
    app.delete("/api/artist/:id", (req, res) => {
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

};
