module.exports = function(sequelize, DataTypes) {
  const Bud = sequelize.define("Bud", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Bud.associate = function(models) {
    // We're saying that a Bud should belong to an Author
    // A Bud can't be created without an Author due to the foreign key constraint
    Bud.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Bud;
};
