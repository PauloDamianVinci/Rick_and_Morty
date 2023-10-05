const axios = require('axios');
const { rickAndMortyApiUrl } = require('../config/config');

//async function getCharById(req, res) {
const getCharById = async (req, res) => {
    try {
        const { id: charId } = req.params;
        const response = await axios.get(`${rickAndMortyApiUrl}${charId}`)

        const { id, name, gender, species, origin, image, status } = response.data;
        const character = { id, name, gender, species, origin, image, status };
        res.json(character);
    } catch (err) {
        //let errMessTxt = err.message;
        //let errMess = err.response.status;
        return res.status(err.response.status).send(err.message);
    }
};
module.exports = getCharById;
