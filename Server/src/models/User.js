const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      email: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
      },
      password: {
         type: DataTypes.STRING,
         unique: false,
         allowNull: false,
      },
   }, { timestamps: false });
};
