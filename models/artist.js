module.exports = function (sequelize, DataTypes) {



    let Artists = sequelize.define("Artists", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },



        first: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last: {
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




    });

    Artists.associate = function (models) {
        Artists.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

    };
    return Artists;
};


