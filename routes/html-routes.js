// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require('../models');
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/display");
    }
    res.render('index', {});
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/display");
    }
    res.render("index", {});
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/display", isAuthenticated, (req, res) => {
    db.Transactions.findAll({
      where: { email: req.user.email }
    }).then(function (dbTransaction) {
      db.Artists.findAll({
        where: { email: req.user.email }
      }).then(function (dbArtist) {
        res.render('display', {
          expense: dbTransaction,
          income: dbArtist
        });
      })
    })
  });
};
