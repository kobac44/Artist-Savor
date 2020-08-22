module.exports = function (sequelize, DataTypes) {
    var Username = sequelize.define("Username", {
        // Giving the Username model a name of type STRING
        Username: DataTypes.STRING
    });

    Username.associate = function (models) {
        // Associating Username with User
        // When an Username is deleted, also delete any associated Posts
        Username.hasMany(models.User, {
            onDelete: "cascade"
        });
    };

    return Username;
};