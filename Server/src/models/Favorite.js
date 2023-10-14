const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      userId: {
         type: DataTypes.INTEGER,
         unique: false,
         allowNull: false,
      },
      CharId: {
         type: DataTypes.INTEGER,
         unique: false,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
         unique: false,
         allowNull: false,
      },
      origin: {
         type: DataTypes.STRING,
         unique: false,
         allowNull: false,
      },
      status: {
         type: DataTypes.STRING,
         unique: false,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
         unique: false,
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         unique: false,
         allowNull: false,
      }, gender: {
         type: DataTypes.STRING,
         unique: false,
         allowNull: false,
      },
   }, { timestamps: false });
};
