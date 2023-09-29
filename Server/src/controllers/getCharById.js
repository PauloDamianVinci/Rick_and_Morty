const axios = require('axios');
const { rickAndMortyApiUrl } = require('../config/config');

async function getCharById(req, res) {
    const { id: charId } = req.params;
    try {
        const response = await axios.get(`${rickAndMortyApiUrl}${charId}`)
        const { id, name, gender, species, origin, image, status } = response.data;
        const character = { id, name, gender, species, origin, image, status };
        res.json(character);
    } catch (err) {
        console.log(err.message);
        let errMessTxt = err.message;
        let errMess = err.response.status;
        return res.status(errMess).send(errMessTxt);
    }
};
module.exports = getCharById;
