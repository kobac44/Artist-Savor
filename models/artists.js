// Import the ORM to create functions that will interact with the database
const orm = require("../config/orm.js");

let Artists = {
    selectOne: (cb) => {
        orm.selectOne('Artists', (res) => cb(res));

    },
    // The variables cols and vals are arrays
    insertOne: (cols, vals, cb) => {
        orm.insertOne("Artists", cols, vals, (res) => cb(res));

    },
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("Artists", objColVals, condition, (res) => cb(res));
    },
    delete: (condition, cb) => {
        orm.delete("Artists", condition, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgerController.js)
module.exports = Artists;
