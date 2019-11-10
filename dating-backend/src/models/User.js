const bcrypt = require('bcrypt');

const user = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('m', 'f'),
      defaultValue: 'm',
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    birthdate: DataTypes.DATE,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    city: DataTypes.STRING,
  });

  User.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
  }

  User.validatePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
  }

  User.associate = (models) => {
    User.belongsToMany(models.Dialog, {
      through: 'DialogMember',
      foreignKey: 'userId'
    });
  }

  return User;
};

module.exports = user;