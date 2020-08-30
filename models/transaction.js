// const db = require(".");

// module.exports = function (sequelize, DataTypes) {

//     let Transactions = sequelize.define("Transactions", {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         origin: {
//             type: DataTypes.TEXT,
//             allowNull: false
//         },
//         type: {
//             type: DataTypes.TEXT,
//             allowNull: false
//         },
//         amount: {
//             type: DataTypes.DECIMAL,
//             allowNull: false,
//         },


//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }

//     });
//     Transactions.associate = function (models) {
//         Transactions.belongsTo(models.Artists, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });

//     }
//     return Transactions;
// };


