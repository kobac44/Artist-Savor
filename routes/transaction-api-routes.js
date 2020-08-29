var db = require("../models");

module.exports = function (app) {
    // ------------to find all(All the expenses with the same user)--------
    app.get("/api/transactions", function (req, res) {
        db.Transactions.findAll({}).then(function (dbTransactions) {
            res.json(dbTransactions);
            console.log(dbTransactions);
        });
    });

    // -----API route for the Categorywise expenses-------
    app.get("/api/transactions/summary/:email", function (req, res) {
        db.Transactions.findAll({
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

    // -----POST route for new expenses source for the same user-----
    app.post("/api/create", function (req, res) {
        console.log(req.body);
        db.Transactions.create({
            origin: req.body.origin,
            type: req.body.type,
            amount: req.body.amount,
            userID: req.body.userID
        }).then(function (dbTransactions) {
            res.json(dbTransactions);
        });
    });

    // --------DELETE route to Delete Expenses by id
    app.delete("/api/transactions/:id", function (req, res) {
        console.log(req.params.id);
        db.Transactions.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTransactions) {
            res.json(dbTransactions);
        });
    });

    app.post("/api/transactions/", function (req, res) {
        db.Transactions.create({
            origin: req.body.origin,
            type: req.body.type,
            amount: req.body.amount,
            email: req.body.email
        }).then(function (dbTransactions) {
            res.json(dbTransactions);
        });
    });

    app.get("/api/transactions/:id", function (req, res) {
        db.Transactions.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbTransactions) {
            res.json(dbTransactions);
        });
    });

    app.get("/api/transactions/total/:email", function (req, res) {
        db.Transactions.findAll({
            attributes: [[db.sequelize.fn('SUM', db.sequelize.col('amount')), 'tot_amt']],
            where: {
                email: req.params.email
            }
        }).then(function (sum) {
            res.json(sum);
            console.log(sum);
        });
    });

    app.get("/api/transactions/detail/:email", function (req, res) {
        db.Transactions.findAll({
            where: {
                email: req.params.email
            }
        }).then(function (dbTransactions) {
            res.json(dbTransactions);
            console.log(dbTransactions);
        });
    });

};
