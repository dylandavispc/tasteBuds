module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Bud, {
      onDelete: "cascade"
    });
  };

  return User;
};
