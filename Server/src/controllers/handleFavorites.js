let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    res.json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;
    if (id === '999') {
        // elimino todos los id:
        myFavorites = [];
    } else {
        // elimino solo un id:
        myFavorites = myFavorites.filter(objeto => objeto.id !== Number(id));
    }
    res.json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav,
};