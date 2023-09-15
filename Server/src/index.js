const http = require("http");
const fs = require('fs');
const data = require('./utils/data.js');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    //console.log(url);

    if (url.includes('/rickandmorty/character')) {
        // Divido la URL por '/' y tomo el último elemento que contiene el ID
        const parts = url.split('/');
        const idString = parts[parts.length - 1];
        const id = parseInt(idString, 10);
        if (!isNaN(id)) {
            const character = data.find((char) => char.id === id);
            if (character) {
                res.writeHead(200, { "content-Type": "application/json" });
                //console.log('Personaje encontrado:', character);
                console.log('Personaje encontrado');
                return res.end(JSON.stringify(character))
            } else {
                console.log('Personaje no encontrado');
                res.writeHead(404);
                return res.end();
            }
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
    .listen(3001, "localhost");