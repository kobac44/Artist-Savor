//dependencies for express and burger models 
//controller routes the user expectation to database and view
const express = require('express');
const user = require("../models/user");
const router = express.Router();
//requesting all objs from database to handlebars view
// router.get('/', (req, res) => {
//     user.selectAll((data) => {
//         let hdbrsObj = {
//             accounts: data
//         };

//         res.render("index", hdbrsObj);
//     });
// });
//adding a burger by posting it to the database 
router.post('/api/transaction', (req, res) => {
    user.insertOne(
        ['bank_account', 'transaction'],
        [req.body.bank_account, req.body.transaction],
        (result) => {
            res.json({ id: result.insertId });
        });
});
//updating api burger by id to devoured 
router.put('/api/accounts/:id', (req, res) => {
    let condition = "id = " + req.params.id;

    user.updateOne({ balance: req.body.balance }, condition, (result) => {
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
router.delete("/api/accounts/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    user.delete(condition, (result) => {
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