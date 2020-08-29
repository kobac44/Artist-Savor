var db = require("../models");

module.exports = function (app) {
    // ------------to find all(All the incomes with the same user)--------
    app.get("/api/artists", function (req, res) {
        db.Artists.findAll({}).then(function (dbArtists) {
            res.json(dbArtists);
            console.log(dbArtists);
        });
    });

    // -----API route for the Categorywise incomes-------
    app.get("/api/artists/summary/:email", function (req, res) {
        db.Artists.findAll({
            attributes: ['type', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'tot_amt']],
            where: {
                email: req.params.email
            },
            group: 'type'
        }).then(function (sum) {
            res.json(sum);
            console.log(sum);
        });

    });



    // -----POST route for new income source the same user-----


    app.post("/api/create", function (req, res) {
        console.log(req.body);
        db.Artists.create({
            origin: req.body.origin,
            type: req.body.type,
            amount: req.body.amount,
            userID: req.body.userID
        }).then(function (dbArtists) {
            res.json(dbArtists);
        });
    });

    // --------DELETE route to Delete an income item by id
    app.delete("/api/artists/:id", function (req, res) {
        console.log(req.params.id);
        db.Artists.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbArtists) {
            res.json(dbArtists);
        });
    });

    app.post("/api/artists/", function (req, res) {
        db.Artists.create({
            origin: req.body.origin,
            type: req.body.type,
            amount: req.body.amount,
            email: req.body.email
        }).then(function (dbArtists) {
            res.json(dbArtists);
        });
    });

    app.get("/api/artists/:id", function (req, res) {
        db.Artists.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbArtists) {
            res.json(dbArtists);
        });
    });

    app.get("/api/artists/total/:email", function (req, res) {
        db.Artists.findAll({
            attributes: [[db.sequelize.fn('SUM', db.sequelize.col('amount')), 'tot_amt']],
            where: {
                email: req.params.email
            }
        }).then(function (sum) {
            res.json(sum);
            console.log(sum);
        });
    });
    app.get("/api/artists/detail/:email", function (req, res) {
        db.Artists.findAll({
            where: {
                email: req.params.email
            }
        }).then(function (dbArtists) {
            res.json(dbArtists);
            console.log(dbArtists);
        });
    });

}; 