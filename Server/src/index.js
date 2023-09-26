const { routerGet, routerLogin, routerPostFav, routerDeleteFav } = require('./routes/index');

const express = require('express');
//const cors = require('cors');
const server = express();
const PORT = 3001;

//server.use(cors()); // para evitar el problema de error de acceso desde el front
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
server.use(express.json());
//Middleware para agregar "/rickandmorty" antes de cada ruta:
// server.use((req, res, next) => {
//     req.url = `/rickandmorty${req.url}`;
//     next();
// });

server.use('/rickandmorty/character', routerGet);
server.use('/rickandmorty/login', routerLogin);
server.use('/rickandmorty/fav', routerPostFav);
server.use('/rickandmorty/fav', routerDeleteFav);

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});

module.exports = express;