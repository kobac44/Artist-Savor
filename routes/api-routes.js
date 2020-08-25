// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
// Account and User models
const Account = require("../../controllers/account_controllers.js");



module.exports = function (app) {

  app.get('/', (request, response, next) => {
    response.render('index', {
    });
  });

  app.get("/api/userName/bank_account", (req, res, next) => {
    db.userName.findAll({
      include: [db.bank_account]
    }).then(function (dbuserName) {
      res.json(dbuserName);
    });
  });

  app.post("/api/userName/bank_account/balance", (req, res, next) => {
    db.userName.findOne({
      where: {
        balance: req.params.balance
      },
      include: [db.bank_account]
    }).then(function (dbuserName) {
      res.json(dbuserName);
    });
  });

  app.post("api/userName/bank_account/transaction", (req, res, next) => {
    db.userName.findAll(req.body).then(function (transaction) {
      res.json(transaction)
      console.log("all transaction, result")
    });

  });
  app.post("/api/userName/bank_accont/transaction", (req, res, next) => {

  })




  app.
};
