const favoritePeople = (sequelize, DataTypes) => {
    const FavoriteList = sequelize.define("favorite_people", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }
    });
  
    FavoriteList.associate = function (models) {
      
    };
  
    return Dialog;
  };
  
  module.exports = dialog;