module.exports = function (sequelize, DataTypes) {

    let Transaction = sequelize.define("Transaction", {

        balance: DataTypes.DECIMAL,

    });
    Transaction.associate = function (models) {
        Transaction.belongsTo(models.Transaction, {
            foreignKey: {
                allowNull: false
            }
        });

    }
    return Transaction;
};


