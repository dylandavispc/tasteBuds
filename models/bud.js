module.exports = function(sequelize, DataTypes) {
  const Bud = sequelize.define("Bud", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Bud;
};
