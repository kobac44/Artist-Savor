module.exports = function (sequelize, DataTypes) {



    let Artist = sequelize.define("Artist", {
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
        artform: DataTypes.TEXT,
        account: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        balance: DataTypes.DECIMAL,
        deposit: DataTypes.DECIMAL,
        withdrawl: DataTypes.DECIMAL,

    });
    Artist.associate = function (models) {
        Artist.hasMany(models.Transaction, {
            foreignKey: {
                allowNull: false
            }
        });

    }
    return Artist;
};


