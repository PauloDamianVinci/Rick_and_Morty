require('dotenv').config();
const axios = require('axios');
const { rickAndMortyApiUrl } = process.env;

const getCharById = async (req, res) => {

    console.log(rickAndMortyApiUrl);

    try {
        const { id: charId } = req.params;
        const response = await axios.get(`${rickAndMortyApiUrl}${charId}`)

        const { id, name, gender, species, origin, image, status } = response.data;
        const character = { id, name, gender, species, origin, image, status };
        res.json(character);
    } catch (err) {
        return res.status(err.response.status).send(err.message);
    }
};
module.exports = getCharById;
