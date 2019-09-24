module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    password: DataTypes.STRING
  })

  User.associate = function(models) {
    User.hasMany(models.Bud, {
      onDelete: "cascade"
    });
  }

  return User;
};
