const axios = require('axios');
const { rickAndMortyApiUrl } = require('../config/config');

const getCharById = (res, id) => {


    // setTimeout(() => {
    console.log("YA");


    axios.get(`${rickAndMortyApiUrl}${id}`)
        .then((response) => {
            const { id, name, gender, species, origin, image, status } = response.data;
            const character = { id, name, gender, species, origin, image, status };
            //console.log("200, id: ", id);
            res.writeHead(200, { "content-Type": "application/json" });
            return res.end(JSON.stringify(character))
        })
        .catch((error) => {
            //console.log("500, id: ", id);
            res.writeHead(500);
            return res.end();
        });



    // }, 3000)


};
module.exports = getCharById;

