module.exports = function (sequelize, DataTypes) {



    let Artists = sequelize.define("Artists", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
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
    Artists.associate = function (models) {
        Artists.hasMany(models.Artists, {
            onDelete: "cascade"
        });

    }

    return Artists;
};


