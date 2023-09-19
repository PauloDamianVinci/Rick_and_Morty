const axios = require('axios');
const { rickAndMortyApiUrl } = require('../config/config');

const getCharById = (res, id) => {
    axios.get(`${rickAndMortyApiUrl}${id}`)
        .then((response) => {
            const { id, name, gender, species, origin, image, status } = response.data;
            const character = { id, name, gender, species, origin, image, status };
            res.writeHead(200, { "content-Type": "application/json" });
            return res.end(JSON.stringify(character))
        })
        .catch((error) => {
            res.writeHead(500);
            return res.end();
        });
};
module.exports = getCharById;

