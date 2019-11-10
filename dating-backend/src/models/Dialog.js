const dialog = (sequelize, DataTypes) => {
  const Dialog = sequelize.define("dialog", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  Dialog.associate = function (models) {
    Dialog.belongsToMany(models.User, {
        through: 'DialogMember',
        foreignKey: 'dialogId'
      })
  };

  return Dialog;
};

module.exports = dialog;