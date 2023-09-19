const http = require("http");
const PORT = 3001;
const getCharById = require('./controllers/getCharById');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if (url.includes('/rickandmorty/character')) {
        // Divido la URL por '/' y tomo el último elemento que contiene el ID:
        const parts = url.split('/');
        const idString = parts[parts.length - 1];
        const id = parseInt(idString, 10);
        if (!isNaN(id)) {
            return getCharById(res, id);
        } else {
            console.log('ID de personaje no válido');
            res.writeHead(400);
            return res.end();
        }
    }

    console.log('La URL no incluye /rickandmorty/character');
    res.writeHead(404);
    res.end();
})
    .listen(PORT, "localhost");