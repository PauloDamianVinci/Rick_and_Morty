require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const UserFunction = require('../src/models/User');
const FavoriteFunction = require('../src/models/Favorite');

const database = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
   { logging: false, native: false }
);
UserFunction(database);
FavoriteFunction(database);

// Relacionar modelos:
const { User, Favorite } = database.models;
// User.belongsToMany(Favorite, { through: "UserFavorite" });
// Favorite.belongsTo(User, { through: "UserFavorite" });

module.exports = {
   database,
   ...database.models,
};
