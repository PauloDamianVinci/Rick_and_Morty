require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const UserModel = require('../src/models/User');
const FavoriteModel = require('../src/models/Favorite');

// ! conexión segura (para BDD remota):
// const database = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=require`,
//    { logging: false, native: false }
// );

// ! conexión insegura (para BDD local):
const database = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
   { logging: false, native: false }
);
UserModel(database);
FavoriteModel(database);
// Relacionar modelos:
const { User, Favorite } = database.models;
//User.belongsToMany(Favorite, { through: "user_favorite" });
//Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
   User,
   Favorite,
   conn: database,
};
