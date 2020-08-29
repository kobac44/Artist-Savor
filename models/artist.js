module.exports = function (sequelize, DataTypes) {



    let Artists = sequelize.define("Artists", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },



        artistName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        artist_address: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },



    });
    Artists.associate = function (models) {
        Artists.hasMany(models.Transactions, {
            onDelete: "cascade"
        });
    };
    Artists.associate = function (models) {
        Artists.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

    };
    return Artists;
};


