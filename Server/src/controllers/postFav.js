const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    const { userId, id, name, origin, status, image, species, gender } = req.body;
    try {
        if (id && userId && name && origin && status && image && species && gender) {
            const addFav = await Favorite.findOrCreate({
                where: { userId: userId, name: name },
                defaults: {
                    name, origin, status, image, species, gender, userId, CharId: id
                }
            });
        } // si no me carga los datos sólo devuelvo lo que tengo. Es para que al iniciar el programa, se traiga los fav almacenados para mostrar.
        // devuelvo todos los favoritos del usuario:
        const newFav = await Favorite.findAll({
            where: { userId: userId },
        });

        return res.status(200).json(newFav);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
module.exports = postFav;
