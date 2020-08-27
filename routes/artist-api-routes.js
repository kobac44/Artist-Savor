const express = require('express');
const router = express.Router();
const db = require("./models");
const Artist = require('../models/Artist');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// Display new artists form
router.get('/new', (req, res) => res.render('new'));
// Add a artist
module.exports = function (app) {
    app.get('/', (request, response, next) => {
        response.render('index', {
        });
    });
    app.create("/passport_demo/")
    app.get("/api/artist/:id", (req, res, next) => {
        db.Artist.findAll({
            include: [db.passport_demo]
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
    app.put("/api/transaction/deposit", (req, res, next) => {
        db.Transaction.update({
            where: {
                balance: req.body.deposit
            },
        }).then(function (dbpassport_demo) {
            res.json(dbpassport_demo);
        });
    });
    app.put("/api/transaction/withdrawl", (req, res, next) => {
        db.Transaction.update({
            where: {
                balance: req.body.withdrawl
            },
            include: [db.transaction]
        }).then(function (dbpassport_demo) {
            res.json(dbpassport_demo);
        });
    });
};
