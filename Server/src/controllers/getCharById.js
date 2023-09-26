const axios = require('axios');
const { rickAndMortyApiUrl } = require('../config/config');

const getCharById = (req, res) => {
    const { id } = req.params;
    axios.get(`${rickAndMortyApiUrl}${id}`)
        .then((response) => {
            const { id, name, gender, species, origin, image, status } = response.data;
            const character = { id, name, gender, species, origin, image, status };
            return res.json(character);
        })
        .catch((error) => {
            return res.send(404);
        });
};
module.exports = getCharById;
