const db = require(".");

module.exports = function (sequelize, DataTypes) {

    let Transactions = sequelize.define("Transactions", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        origin: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        type: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        artform: DataTypes.TEXT,

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn("NOW"),
            notNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn("NOW"),
            notNull: true
        }
    });
    Transactions.associate = function (models) {
        Transactions.hasMany(models.Transactions, {
            onDelete: "cascade"
        });

    }
    return Transactions;
};


