const express = require('express');

const getCharById = require('../controllers/getCharById');
const handleLogin = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

//const { routerGet, routerLogin, routerPostFav, routerDeleteFav } = express.Router();
const routerGet = express.Router();
const routerLogin = express.Router();
const routerPostFav = express.Router();
const routerDeleteFav = express.Router();

routerGet.get('/:id', (req, res) => {
    getCharById(req, res);
})

routerLogin.get('/', (req, res) => {
    handleLogin(req, res);
})

routerPostFav.post('/', (req, res) => {
    postFav(req, res);
})

routerDeleteFav.delete('/:id', (req, res) => {
    deleteFav(req, res);
})

module.exports = {
    routerGet,
    routerLogin,
    routerPostFav,
    routerDeleteFav,
};